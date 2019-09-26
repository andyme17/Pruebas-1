import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {

  public placehUser:string;
  public errorMessage:string;
  public placehPassword:string;


  constructor(
    /*Se inicializan parametros para el ruteo */
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.placehUser = "Usuario1";
    this.placehPassword = "Password1";
    this.errorMessage = "Usuario o Contraseña Inválidos";
    console.log("Se ha cargado el componente: login.component.ts");
  }
  ngOnInit() {
    console.log("Método ngOnInit ejecutado en login.component.ts");
  }
  ngDoCheck() {
    console.log("Método DoCheck ejecutado en login.component.ts");
  }
  ChangePH(){
    this.placehUser = "Se activo Botón Entrar";
    this.placehPassword = "Se activo Botón Entrar";
    console.log("Método ChangePH() ejecutado en login.component.ts");
    this._router.navigate(['/inicio']);
  }
}
