import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-admin',
  templateUrl: './barra-admin.component.html',
  styleUrls: ['./barra-admin.component.css']
})
export class BarraAdminComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  menu() {
    sessionStorage.removeItem("idUsu");

    this._router.navigate(['/a']);
  }

  cerrarSesion() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("perfil");

    this._router.navigate(['/0']);
  }

}
