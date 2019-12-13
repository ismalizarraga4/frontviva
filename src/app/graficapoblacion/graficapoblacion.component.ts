import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-graficapoblacion',
  templateUrl: './graficapoblacion.component.html',
  styleUrls: ['./graficapoblacion.component.sass']
})
export class GraficapoblacionComponent implements OnInit {

  @Input() infoEstados : any[] = [];

  edoPoblacion : any[] = [];

  edoPoblaciontotal : any[] = [];

  isVisibleGraph = true;

  edoPlobacionDetalle : any[] = [];

  constructor() { }

  ngOnInit() {
    
    for (let i = 0; i < this.infoEstados.length; i++) {
      
      var auxobjedo : any[] = [];
      
      var nombreedo = this.infoEstados[i][0].State;
      var IdEdo = this.infoEstados[i][0]['ID State'];

      for (let l = 0; l < this.infoEstados[i].length; l++) {
        auxobjedo.push({
          Year : this.infoEstados[i][l].Year,
          population : this.infoEstados[i][l].Population,
          styleEdoPoblacion : {
            width : Math.trunc(((this.infoEstados[i][l].Population)/10000)/2) + "px"
          }

        });
      }

      this.edoPoblacion.push({
        IdState : IdEdo,
        State : nombreedo,
        data :auxobjedo
      });      
      
    }

    var colores : any[] = ["green","yellow","red"];

    for (let i = 0; i < this.edoPoblacion.length; i++) {
      var auxobj : any[] = [];

      var longitud = this.edoPoblacion[i].data.length;
      var suma = this.infoEstados[i][longitud-1].Population + this.infoEstados[i][longitud-2].Population + this.infoEstados[i][longitud-3].Population;
      
      var color = 0;

      for (let l = (this.edoPoblacion[i].data.length)-3; l < (this.edoPoblacion[i].data.length); l++) {


        auxobj.push({
          Year : this.infoEstados[i][l].Year,
          population : this.infoEstados[i][l].Population,
          percentage :  {
                          width:  "33%"
                        },
          color : colores[color],
          percentageText : Math.trunc(((this.infoEstados[i][l].Population/suma)*100)) + "%"
        });

        color++;
        
      }

      this.edoPoblaciontotal.push({
        IdState : this.edoPoblacion[i].IdState,
        State : this.edoPoblacion[i].State,
        data : auxobj
      });
      
    }
  }

  detalleEstado(IdEstado){
    debugger;
    this.edoPlobacionDetalle = [];
    this.edoPlobacionDetalle.push(this.edoPoblacion.find(elemento => elemento.IdState == IdEstado));
    this.isVisibleGraph = !this.isVisibleGraph;
  }

  retornarGraph(){
    this.isVisibleGraph = !this.isVisibleGraph;
  }

}
