import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuarios.model';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],

  providers: [UsuariosService]
})
export class UsuarioComponent implements OnInit {
  public usuarioModelGet: Usuario;
  public usuarioModelPost: Usuario;

  public token;

  constructor(private _usuarioServicio: UsuariosService) {
    this.token = this._usuarioServicio.getToken();
  }

  ngOnInit(): void {
    this.getUsuarios();
    this.usuarioModelPost = new Usuario("", "", "", "", "", "");
  }

  getUsuarios() {
    this._usuarioServicio.verUsuarios(this.token).subscribe(
      (response) => {
        console.log(response);
        this.usuarioModelGet = response.usuarios;
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  postUsuarios() {
    this._usuarioServicio.agregarUsuarios(this.usuarioModelPost).subscribe(
      (response) => {
        console.log(response);
        this.getUsuarios();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  deleteUsuarios(id) {
    this._usuarioServicio.deletePerfil(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getUsuarios();
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

}
