import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'lista-viajes',
  templateUrl: './lista-viajes.component.html',
  styleUrls: ['./lista-viajes.component.css']
})
export class ListaViajesComponent implements OnInit {

  constructor() { }

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
}
