import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public url: String = "http://localhost:7000/api"

  public headerVariable = new HttpHeaders().set('Content-Type', 'application/json')

  public perfil;
  public token;

  ////////////////////////////////////////////////////////////////////////////////////////////////

  constructor(public _http: HttpClient) { }

  verUsuarios(token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token) //

    return this._http.get(this.url + '/verUsuarios', { headers: headersToken })
  }

  agregarUsuarios(modeloUsuario: Usuario): Observable<any> {//////////////
    let parametros = JSON.stringify(modeloUsuario)

    return this._http.post(this.url + '/registrar', parametros, { headers: this.headerVariable })
  }

  deletePerfil(id: String, token): Observable<any> {
    let headersToken = this.headerVariable.set("Authorization", token)

    return this._http.delete(this.url + '/eliminarUsuario/' + id, { headers: headersToken })
  }

  ////////////////////////////////////////////////

  login(usuario, Token = null): Observable<any> {
    if (Token != null) {
      usuario.Token = Token;
    }
    let params = JSON.stringify(usuario);

    return this._http.post(this.url + '/login', params, { headers: this.headerVariable });
  }

  registrar(parametros): Observable<any> {//////////////
    return this._http.post(this.url + '/registrar', parametros, { headers: this.headerVariable });
  }

  getToken() {
    var token2 = sessionStorage.getItem('token');
    if (token2 != undefined) {
      this.token = token2;
    } else {
      this.token = null;
    }
    return this.token;
  }

  getPerfil() {
    var perfil2 = JSON.parse(sessionStorage.getItem('perfil'));
    if (perfil2 != undefined) {
      this.perfil = perfil2;
    } else {
      this.perfil = null;
    }
    return this.perfil;
  }

  


}
