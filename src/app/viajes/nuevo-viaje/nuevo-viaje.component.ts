import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nuevo-viaje',
  templateUrl: './nuevo-viaje.component.html',
  styleUrls: ['./nuevo-viaje.component.css']
})
export class NuevoViajeComponent implements OnInit {

  constructor() {
  console.log("Se ha cargado el componente: nuevo-viaje.component.ts");}
  ngOnInit() {
  }
  onSubmit(){

  }

}
