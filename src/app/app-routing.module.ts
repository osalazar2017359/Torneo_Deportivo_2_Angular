import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { EquiposComponent } from './componentes/equipos/equipos.component';
import { JornadasComponent } from './componentes/jornadas/jornadas.component';
import { LigasComponent } from './componentes/ligas/ligas.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { TablaLigaComponent } from './componentes/tabla-liga/tabla-liga.component';
import { TorneosComponent } from './componentes/torneos/torneos.component';
import { UsuarioComponent } from './componentes/usuarios/usuarios.component';
import { VistaAdminComponent } from './componentes/vista-admin/vista-admin.component';
import { VistaNormalComponent } from './componentes/vista-normal/vista-normal.component';
import { VistaUsuarioComponent } from './componentes/vista-usuario/vista-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '0', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: '0', component: VistaNormalComponent },

  { path: 'a', component: VistaAdminComponent },
  { path: 'ligas/:idUsuario', component: LigasComponent },
  //{ path: 'torneos', component: TorneosComponent },

  { path: 'u', component: VistaUsuarioComponent },
  //{ path: 'cuenta', component: JornadasComponent },//PENDIENTE
  { path: 'jornadas/:idLiga', component: JornadasComponent },
  { path: 'equipo/:idEquipo', component: EquiposComponent },
  { path: 'tabla-liga/:idLiga', component: TablaLigaComponent },
  { path: '**', component: VistaNormalComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [VistaNormalComponent, VistaAdminComponent, VistaUsuarioComponent, LigasComponent,
JornadasComponent, EquiposComponent, TablaLigaComponent]
