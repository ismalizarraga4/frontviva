import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public usuario = ""; //: string;
  public contrasena = ""; //: string;
  public x = "";

  falseLogin = false;
  mensajeFalseLogin = "";



  @Output() hideLogin = new EventEmitter<boolean>();
  @Output() getToken = new EventEmitter<string>();


  constructor(protected datosService: DatosService, private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  clickLogin(){

    if(!this.isEmpty(this.usuario) && !this.isEmpty(this.contrasena)){

      this.falseLogin = false;
      this.mensajeFalseLogin = "";
      
      var objLogin = {
        usuario : this.usuario,
        contrasena : this.contrasena
      }

      this.validarLogin(objLogin);

    }else{
      debugger;
      this.falseLogin = true;
      this.mensajeFalseLogin = "Favor de ingresar un usuario y/o contraseña";

      console.log("buscar que poner aqui pero estan vacios")

    }
  }

  isEmpty(dato){
    return dato == "" ? true : false;
  }

  validarLogin(objLogin){

    var uri = 'http://localhost:3000/api/autenticar';

    // llamar funcion del token

    this.httpClient.post(uri,objLogin).toPromise().then((data)=>{
      debugger;
      
      if(data['IsApproved']){
        
        var response = {
          mensaje: data['mensaje'],
          IsApproved : data['IsApproved'],
          token: data['token']
        }

        this.getToken.emit(response.token);

        this.hideLogin.emit();
      }else{
        this.falseLogin = true;
        this.mensajeFalseLogin = "usuario o contraseña incorrectos"
      }

	 	}, (err) => {
		  console.log(err);
     });
   
  }

  datosUsuario(){

    var datosLogin = {
      usuario : "tester",
      contrasena: "prueba123"
    };

    return datosLogin;

  }

}
