import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'examen';

  isVisible = false;

  token = "";


  ocultaLogin(validadorLogin) {
    this.isVisible = !validadorLogin;
  }

  obtenerToken(tkn) {
    this.token = tkn;
  }



}
