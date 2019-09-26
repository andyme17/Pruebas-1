import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'crear-viaje',
  templateUrl: './crear-viaje.component.html',
  styleUrls: ['./crear-viaje.component.css']
})
export class CrearViajeComponent implements OnInit {

public usuario: string;

  constructor(
    /*Se inicializan parametros para el ruteo */
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  this.usuario ="pedro";
  console.log("Se ha cargado el componente: crear-viaje.component.ts");
  console.log("Ha accedido el Usuario: 'usuario'");
 }
  ngOnInit() {
  }

  showSidebar(){
    $('#sidebar').toggleClass('active');
    $('#sidebarCollapse').hide();
  }
  hiddenSidebar(){
    $('#sidebar').removeClass('active');
    $('#sidebarCollapse').show();
  }

  redirigir(){
    this._router.navigate(['/viajes-y-documentos/informacion-viaje']);
  }
}
