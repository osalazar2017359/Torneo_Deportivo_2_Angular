import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquiposService } from 'src/app/servicios/equipos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
public equipoModelGetId;

  constructor(private _usuarioService: UsuariosService, private _equipoService: EquiposService,
    private _activatedRoute: ActivatedRoute) {
    this.token = this._usuarioService.getToken() }

    public token;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getEquipoId(dataRuta.get('idEquipo'))
    })
  }

  getEquipoId(idEquipo){
    this._equipoService.EquipoId(idEquipo, this.token).subscribe(
      (response) => {
        console.log(response);
        this.equipoModelGetId = response.equipo;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

}
