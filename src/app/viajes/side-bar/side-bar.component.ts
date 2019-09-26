import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],

})
export class SideBarComponent implements OnInit {

  constructor() {
  console.log("Se ha cargado el componente: side-bar.component.ts"); }
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
