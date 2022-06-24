import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuarios.model';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsuariosService]
})
export class RegisterComponent implements OnInit {
  public usuarioModelPost: Usuario;

  constructor(private _usuarioService: UsuariosService,
    private _router: Router) { }

  ngOnInit(): void {
    this.usuarioModelPost = new Usuario("", "", "", "", "", "");
  }

  register() {
    this._usuarioService.registrar(this.usuarioModelPost).subscribe(
      (response) => {
        console.log(response)
        this._router.navigate(['/login']);
      },
      (error) => {
        console.log(<any>error)
        this._router.navigate(['/0']);
      }
    )
  }


}
