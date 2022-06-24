import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { torneos } from '../modelos/torneos.model';

@Injectable({
  providedIn: 'root'
})
export class TorneosService {
  public url: String = "http://localhost:7000/api"

  public headerVariable = new HttpHeaders().set('Content-Type', 'application/json')

  ////////////////////////////////////////////////////////////////////////

  constructor(private _http: HttpClient) { }

  verTorneos(_id: String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.get(this.url + '/verTorneos/' + _id, { headers: headersToken })
  }

  obtenerTorneoId(id : String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.get(this.url + '/torneo/' + id, { headers: headersToken })
  }

  agregarTorneos(modeloTorneo: torneos, _id, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)
    let parametros = JSON.stringify(modeloTorneo)

    return this._http.post(this.url + '/crearTorneo/' + _id, parametros, { headers: headersToken })
  }

  editarTorneo(modeloTorneo: torneos, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)
    let parametros = JSON.stringify(modeloTorneo);

    return this._http.put(this.url + '/editarTorneo/' + modeloTorneo._id, parametros, { headers: headersToken})
  }

  borrarTorneo(id: String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.delete(this.url + '/eliminarTorneo/' + id, { headers: headersToken })
  }


}
