import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jornadas } from '../modelos/jornadas.model';

@Injectable({
  providedIn: 'root'
})
export class JornadasService {
  public url: String = "http://localhost:7000/api"

  public headerVariable = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private _http: HttpClient) { }

  ////////////////////////////////////////////////

  verJornadasP(idLiga: String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.get(this.url + '/verJornadas/' + idLiga, { headers: headersToken })
  }
  jornadaId(id: String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.get(this.url + '/jornadaId/' + id, { headers: headersToken })
  }

  crearJornada(idLiga, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.post(this.url + '/generarJornadas/' + idLiga, { headers: headersToken })
  }
  asignarPartido(modeloPartido: jornadas, idJornada, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)
    let parametros = JSON.stringify(modeloPartido);

    return this._http.put(this.url + '/partidosXJornada/' + idJornada, parametros, { headers: headersToken })
  }

}
