import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { torneos } from 'src/app/modelos/torneos.model';
import { Usuario } from 'src/app/modelos/usuarios.model';
import { LigasService } from 'src/app/servicios/ligas.service';
import { TorneosService } from 'src/app/servicios/torneos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-vista-admin',
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.css'],
  providers: [TorneosService]
})
export class VistaAdminComponent implements OnInit {
  public usuarioModelGet: Usuario;

  public torneoModelGet: torneos;
  public torneoModelGetId: torneos;
  public torneoModelPost: torneos;

  public token;
  public _id = this._usuarioService.getPerfil()._id;

  constructor(private _torneoServicio: TorneosService, private _usuarioService: UsuariosService, private _ligaService: LigasService,
    private _router: Router) {
    this.token = this._usuarioService.getToken()
  }

  ngOnInit(): void {
    this.getTorneos()
    this.getUsuarios()
    this.torneoModelPost = new torneos("", "", "");
    this.torneoModelGetId = new torneos("", "", "");
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  getUsuarios() {
    this._usuarioService.verUsuarios(this.token).subscribe(
      (response) => {
        console.log(response);
        this.usuarioModelGet = response.usuarios;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  deleteUsuarios(id) {
    this._usuarioService.deletePerfil(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getUsuarios();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }


  getTorneos() {
    this._torneoServicio.verTorneos(this._id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.torneoModelGet = response.Torneos;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  getTorneoForId(id) {
    this._torneoServicio.obtenerTorneoId(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.torneoModelGetId = response.torneo;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  postTorneo() {
    this._torneoServicio.agregarTorneos(this.torneoModelPost, this._id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getTorneos();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  putTorneo() {
    this._torneoServicio.editarTorneo(this.torneoModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getTorneos();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  deleteTorneo(id) {
    this._torneoServicio.borrarTorneo(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getTorneos();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  irLigas(idUsuario) {
    this._ligaService.verLigasP(idUsuario, this.token).subscribe(
      (response) => {
        sessionStorage.setItem("idUsu", JSON.stringify(idUsuario));
        this._router.navigate(['/ligas/' + idUsuario]);
        console.log(response)
      },
      (error) => {
        console.log(<any>error)
      }
    )
  }



}
