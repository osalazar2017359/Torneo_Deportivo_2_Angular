import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { equipos } from '../modelos/equipos.model';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  public url: String = "http://localhost:7000/api"
  public headerVariable = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private _http: HttpClient) { }


  verEquiposP(_id: String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.get(this.url + '/verEquipos/' + _id, { headers: headersToken })
  }
  EquipoId(id: String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.get(this.url + '/equipoId/' + id, { headers: headersToken })
  }

  agregarEquipos(modeloEquipo: equipos, _id, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)
    let parametros = JSON.stringify(modeloEquipo)

    return this._http.post(this.url + '/crearEquipo/' + _id, parametros, { headers: headersToken })
  }

  editarEquipo(modeloEquipo: equipos, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)
    let parametros = JSON.stringify(modeloEquipo);

    return this._http.put(this.url + '/editarEquipo/' + modeloEquipo._id, parametros, { headers: headersToken })
  }

  borrarEquipo(id: String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.delete(this.url + '/eliminarEquipo/' + id, { headers: headersToken })
  }
}
