import { routing, appRoutingProviders } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './viajes/menu-principal/menu-principal.component';
import { SideBarComponent } from './viajes/side-bar/side-bar.component';
import { LoginComponent } from './viajes/login/login.component';
import { NuevoViajeComponent } from './viajes/nuevo-viaje/nuevo-viaje.component';
import { CrearViajeComponent } from './viajes/crear-viaje/crear-viaje.component';
import { ListaViajesComponent } from './viajes/lista-viajes/lista-viajes.component';
import { LogoComponent } from './viajes/logo/logo.component';
import { InfoUsuComponent } from './viajes/info-usu/info-usu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    SideBarComponent,
    LoginComponent,
    NuevoViajeComponent,
    CrearViajeComponent,
    ListaViajesComponent,
    LogoComponent,
    InfoUsuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
