import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor() {
  console.log("Se ha cargado el componente: menu-principal.component.ts");
 }
  ngOnInit() {
  }

}
