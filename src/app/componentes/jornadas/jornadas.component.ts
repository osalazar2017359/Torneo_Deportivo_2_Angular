import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { asignacion_equipos } from 'src/app/modelos/asignacion_equipos.model';
import { equipos } from 'src/app/modelos/equipos.model';
import { jornadas } from 'src/app/modelos/jornadas.model';
import { partidos } from 'src/app/modelos/partidos.model';
import { AsigEquiposService } from 'src/app/servicios/asig-equipos.service';
import { EquiposService } from 'src/app/servicios/equipos.service';
import { JornadasService } from 'src/app/servicios/jornadas.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-jornadas',
  templateUrl: './jornadas.component.html',
  styleUrls: ['./jornadas.component.css']
})
export class JornadasComponent implements OnInit {
  public jornadaModelGet: jornadas;
  public jornadaModelPost: jornadas;

  public partidosModelPost: partidos;
  public equipoModelGet: equipos;
  public equipoModelPost: equipos;

  public asigLigaGet: asignacion_equipos;
  public asigLigaPost: asignacion_equipos;

  public token;
  public idLiga;
  public dataJornadas;

  constructor(private _jornadasService: JornadasService, private _equiposService: EquiposService,
    private _asigEquiposService: AsigEquiposService, private _usuarioService: UsuariosService,
    public _activatedRoute: ActivatedRoute,) {
    this.token = this._usuarioService.getToken()
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getJornadasP(dataRuta.get('idLiga'))
      this.idLiga = dataRuta.get('idLiga')
    })

    this.jornadaModelPost = new jornadas("", "", [{ equipo1: "", puntuacion1: 0, equipo2: "", puntuacion2: 0 }], "")
    this.partidosModelPost = new partidos("", 0, "", 0)

    this.equipoModelPost = new equipos("", "", "", "", 0, 0, 0, 0, "")
    this.asigLigaPost = new asignacion_equipos("", "", "", "", "")
  }

  ////////////////////////////////////////////////////////////////

  getJornadasP(idLiga) {
    this._jornadasService.verJornadasP(idLiga, this.token).subscribe(
      (response) => {
        console.log(response);
        this.jornadaModelGet = response.jornadas;
        this.dataJornadas = Object.values(this.jornadaModelGet)
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  asigPartido() {
    this._jornadasService.crearJornada(this.idLiga, this.token).subscribe(
      (response) => {
        console.log(response)
        this.getJornadasP(this.idLiga)

       // this._jornadasService.asignarPartido(this.jornadaModelPost, response._id, this.token)
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  ///////////////////////////////
  ///////////////////////////////
}
