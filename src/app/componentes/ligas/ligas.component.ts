import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { asignacion_torneos } from 'src/app/modelos/asignacion_torneos.model';
import { ligas } from 'src/app/modelos/ligas.model';
import { torneos } from 'src/app/modelos/torneos.model';
import { LigasService } from 'src/app/servicios/ligas.service';
import { TorneosService } from 'src/app/servicios/torneos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css'],
  providers: [LigasService]
})
export class LigasComponent implements OnInit {
  public ligaModelGet: ligas;
  public ligaModelPost: ligas;

  public asigLigaGet: asignacion_torneos;
  public asigLigaPost: asignacion_torneos;

  public torneoModelGet: torneos;

  public token;
  public idUsuario = this._usuarioService.getPerfil()._id;

  constructor(private _ligasService: LigasService, private _usuarioService: UsuariosService, private _torneoServicio: TorneosService,
    public _activatedRoute: ActivatedRoute,) {
    this.token = this._usuarioService.getToken()
  }

  ngOnInit(): void {
    this.getTorneos()
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getLigasP(dataRuta.get('idUsuario'))
      this.idUsuario = dataRuta.get('idUsuario')
    })

    this.ligaModelPost = new ligas("", "", "", "")
    this.asigLigaPost = new asignacion_torneos("", "", "", "", "")
  }

  getLigasP(idUsuario) {
    this._ligasService.verLigasP(idUsuario, this.token).subscribe(
      (response) => {
        console.log(response);
        this.ligaModelGet = response.ligas;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  ///////////////////////////////
  ///////////////////////////////

  postAsigLiga() {
    this._ligasService.asignarLiga(this.asigLigaPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getLigasP(this.idUsuario);
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  ///////////////////////////////
  ///////////////////////////////

  getTorneos() {
    this._torneoServicio.verTorneos(this.idUsuario, this.token).subscribe(
      (response) => {
        console.log(response);
        this.torneoModelGet = response.Torneos;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

}
