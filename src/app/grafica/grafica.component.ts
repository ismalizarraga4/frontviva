import { Component, OnInit, ɵConsole, Input } from '@angular/core';
import { DatosService } from '../datos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.sass']
})
export class GraficaComponent implements OnInit {

  @Input() gato = "";

  @Input() infoEstados : any[] = [];


  

  constructor(protected datosService: DatosService, private httpClient: HttpClient) {
   }

  ngOnChanges(){
  }

  ngOnInit() {

  }
  
}
