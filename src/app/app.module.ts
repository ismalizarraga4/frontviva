import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatosService } from './datos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GraficaComponent } from './grafica/grafica.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficapoblacionComponent } from './graficapoblacion/graficapoblacion.component';
import { GraficacontaminacionComponent } from './graficacontaminacion/graficacontaminacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GraficaComponent,
    DashboardComponent,
    GraficapoblacionComponent,
    GraficacontaminacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
