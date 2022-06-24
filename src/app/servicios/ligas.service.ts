import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { asignacion_torneos } from '../modelos/asignacion_torneos.model';
import { ligas } from '../modelos/ligas.model';

@Injectable({
  providedIn: 'root'
})
export class LigasService {
  public url: String = "http://localhost:7000/api"

  public headerVariable = new HttpHeaders().set('Content-Type', 'application/json')

  ////////////////////////////////////////////////////////////////////////

  constructor(private _http: HttpClient) { }

  verLigasP(_id: String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.get(this.url + '/verLigas/' + _id, { headers: headersToken })
  }
  ligaId(id: String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.get(this.url + '/ligaId/' + id, { headers: headersToken })
  }

  agregarLigas(modeloLiga: ligas, _id, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)
    let parametros = JSON.stringify(modeloLiga)

    return this._http.post(this.url + '/crearLiga/' + _id, parametros, { headers: headersToken })
  }

  editarLiga(modeloLiga: ligas, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)
    let parametros = JSON.stringify(modeloLiga);

    return this._http.put(this.url + '/editarLiga/' + modeloLiga._id, parametros, { headers: headersToken })
  }

  borrarLiga(id: String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.delete(this.url + '/eliminarLiga/' + id, { headers: headersToken })
  }


  asignarLiga(asigLigaPost: asignacion_torneos, token) {
    let headersToken = this.headerVariable.set("Authorization", token)
    let parametros = JSON.stringify(asigLigaPost)

    return this._http.post(this.url + '/asignarLiga', parametros, { headers: headersToken })
  }


  tablaLiga(idLiga, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.get(this.url + '/tabla/' + idLiga, { headers: headersToken })
  }

  imprimir(idLiga, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.get(this.url + '/tablaPDF/' + idLiga, { headers: headersToken })
  }

}
