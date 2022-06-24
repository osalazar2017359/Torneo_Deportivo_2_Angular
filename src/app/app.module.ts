import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { VistaAdminComponent } from './componentes/vista-admin/vista-admin.component';
import { TorneosComponent } from './componentes/torneos/torneos.component';
import { VistaUsuarioComponent } from './componentes/vista-usuario/vista-usuario.component';
import { LigasComponent } from './componentes/ligas/ligas.component';
import { JornadasComponent } from './componentes/jornadas/jornadas.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { TablaLigaComponent } from './componentes/tabla-liga/tabla-liga.component';
import { BarraAdminComponent } from './componentes/barra-admin/barra-admin.component';
import  {BarraComunComponent} from './componentes/barra-comun/barra-comun.component';
import { BarraUsuarioComponent } from './componentes/barra-usuario/barra-usuario.component';
import { VistaNormalComponent } from './componentes/vista-normal/vista-normal.component';
import { UsuarioComponent } from './componentes/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VistaAdminComponent,
    TorneosComponent,
    VistaUsuarioComponent,
    LigasComponent,
    JornadasComponent,
    EquiposComponent,
    TablaLigaComponent,
    BarraAdminComponent,
    BarraUsuarioComponent,
    BarraComunComponent,
    VistaNormalComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
