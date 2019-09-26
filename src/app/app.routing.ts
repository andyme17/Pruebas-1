//configuracion de rutas

//Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { CrearViajeComponent } from './viajes/crear-viaje/crear-viaje.component';
import { NuevoViajeComponent } from './viajes/nuevo-viaje/nuevo-viaje.component';
import { LoginComponent } from './viajes/login/login.component';
import { MenuPrincipalComponent } from './viajes/menu-principal/menu-principal.component';
import { ListaViajesComponent } from './viajes/lista-viajes/lista-viajes.component';

//Array de rutas
const appRoutes: Routes = [
    { path: '', component:LoginComponent },
    { path: 'inicio', component:MenuPrincipalComponent },
    { path: 'viajes-y-documentos/lista-viajes', component:ListaViajesComponent },
    { path: 'viajes-y-documentos/nuevo-viaje', component:CrearViajeComponent },
    { path: 'viajes-y-documentos/informacion-viaje', component: NuevoViajeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
