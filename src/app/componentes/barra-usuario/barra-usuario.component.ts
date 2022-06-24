import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-usuario',
  templateUrl: './barra-usuario.component.html',
  styleUrls: ['./barra-usuario.component.css']
})
export class BarraUsuarioComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  menu() {
    this._router.navigate(['/u']);
  }

  cerrarSesion() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("perfil");

    this._router.navigate(['/0']);
  }

}
