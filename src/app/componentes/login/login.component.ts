import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuarios.model';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuariosService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuario;

  constructor(
    private _usuarioService: UsuariosService,
    private _router: Router) {
    this.usuarioModel = new Usuario("", "", "", "", "", "");
  }

  ngOnInit(): void {
  }

  getToken() {
    this._usuarioService.login(this.usuarioModel, "true").subscribe(
      (response) => {
        console.log(response);
        sessionStorage.setItem("token", response.token)
      },
      (err) => {
        console.log(<any>err);
      }
    )
  }

  login() {
    this._usuarioService.login(this.usuarioModel).subscribe(
      (response) => {
        this.getToken();
        sessionStorage.setItem("perfil", JSON.stringify(response.usuario));
        console.log(response)

        if (this._usuarioService.getPerfil().rol == "Admin") {
          this._router.navigate(['/a']);
        } else if (this._usuarioService.getPerfil().rol == "Organizador") {
          this._router.navigate(['/u']);
        }
      },
      (error) => {
        console.log(<any>error)
      }
    )
  }



}
