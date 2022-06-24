import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { equipos } from 'src/app/modelos/equipos.model';
import { ligas } from 'src/app/modelos/ligas.model';
import { EquiposService } from 'src/app/servicios/equipos.service';
import { JornadasService } from 'src/app/servicios/jornadas.service';
import { LigasService } from 'src/app/servicios/ligas.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit {
  public ligaModelGet: ligas;
  public ligaModelGetId: ligas;
  public ligaModelPost: ligas;
  public tablaModelGet: LigasService;

  public equipoModelGet: equipos;
  public equipoModelGetId: equipos;
  public equipoModelPost: equipos;
  public marcadorModelGetId: equipos;

  public token;
  public idUsuario = this._usuarioService.getPerfil()._id;

  constructor(private _ligasService: LigasService, private _usuarioService: UsuariosService, private _jornadasService: JornadasService,
    private _equipoService: EquiposService,
    private _router: Router) {
    this.token = this._usuarioService.getToken()
  }

  ngOnInit(): void {
    this.getLigas()
    this.ligaModelPost = new ligas("", "", "", "")
    this.ligaModelGetId = new ligas("", "", "", "")

    this.getEquipos()
    this.equipoModelPost = new equipos("", "", "", "", 0, 0, 0, 0, "")
    this.equipoModelGetId = new equipos("", "", "", "", 0, 0, 0, 0, "")
    this.marcadorModelGetId = new equipos("", "", "", "", 0, 0, 0, 0, "")
  }

  ////////////////////////////////////////////////

  getLigas() {
    this._ligasService.verLigasP(this.idUsuario, this.token).subscribe(
      (response) => {
        console.log(response);
        this.ligaModelGet = response.ligas;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  getLigaForId(id) {
    this._ligasService.ligaId(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.ligaModelGetId = response.liga;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  postLiga() {
    this._ligasService.agregarLigas(this.ligaModelPost, this.idUsuario, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getLigas();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  putLiga() {
    this._ligasService.editarLiga(this.ligaModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getLigas();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  deleteLiga(id) {
    this._ligasService.borrarLiga(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getLigas();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  ///////////////////////////////
  ///////////////////////////////

  irJornadas(idLiga) {
    this._jornadasService.verJornadasP(idLiga, this.token).subscribe(
      (response) => {
        sessionStorage.setItem("idLig", JSON.stringify(idLiga));
        this._router.navigate(['/jornadas/' + idLiga]);
        console.log(response)
      },
      (error) => {
        console.log(<any>error)
      }
    )
  }

  ///////////////////////////////
  ///////////////////////////////

  getEquipos() {
    this._equipoService.verEquiposP(this.idUsuario, this.token).subscribe(
      (response) => {
        console.log(response);
        this.equipoModelGet = response.equipos;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  getEquipoForId(id) {
    this._equipoService.EquipoId(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.equipoModelGetId = response.equipo;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  postEquipo() {
    this._equipoService.agregarEquipos(this.equipoModelPost, this.idUsuario, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEquipos();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  putEquipo() {
    this._equipoService.editarEquipo(this.equipoModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEquipos();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  deleteEquipo(id) {
    this._equipoService.borrarEquipo(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEquipos();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  ////////////////////////////////////////////

  getMarcadorForId(id) {
    this._equipoService.EquipoId(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.marcadorModelGetId = response.equipo;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  putMarcador() {
    this._equipoService.editarEquipo(this.marcadorModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEquipos();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  ////////////////////////////////////////////////////////////////

  getTabla(idLiga) {
    this._ligasService.tablaLiga(idLiga, this.token).subscribe(
      (response) => {
        console.log(response);
        this.tablaModelGet = response.CALIFICACION;

        this._ligasService.imprimir(idLiga, this.token)
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

}
