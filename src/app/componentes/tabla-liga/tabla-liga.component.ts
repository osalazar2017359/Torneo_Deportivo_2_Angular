import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LigasService } from 'src/app/servicios/ligas.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-tabla-liga',
  templateUrl: './tabla-liga.component.html',
  styleUrls: ['./tabla-liga.component.css']
})
export class TablaLigaComponent implements OnInit {
  public tablaModelGet: LigasService;

  constructor(private _ligasService: LigasService, private _usuarioService: UsuariosService, public _activatedRoute: ActivatedRoute,) {
    this.token = this._usuarioService.getToken() }

    public token;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getTabla(dataRuta.get('idLiga'))
    })
  }

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
