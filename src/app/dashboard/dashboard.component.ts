import { Component, OnInit, Input } from '@angular/core';
import { DatosService } from '../datos.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  @Input() tkn : string = ""; 

  isGVisible = false;
  perro= "";

  grafica = "wiii";
  estados = [];
  
  datos1: object = {
    data: [] = []
  };

  datos2: object = {
    data:[] = []
  };

  datos3: object = {
    data:[] = []
  };

  infoPoblacion : any[] = [];
  infoEdoPoblacion : any[] =[];

  infocontaminacion : object ={
    data : [] = []

  };

  poblacionIsVisible = false;
  contaminacionIsVisible = false;
  

  constructor(protected datosService: DatosService, private httpClient: HttpClient) { }

  ngOnInit() {


    let ids = [2013, 2014, 2015, 2016, 2017];
    let arrayOfData = [];
    for(let i = 0; i < ids.length; i++) {
      arrayOfData.push(this.httpClient.get('https://datausa.io/api/data?drilldowns=State&measures=Population&year='+ids[i]));
    }

    forkJoin(arrayOfData).subscribe(response => {
      for(let item in Object.keys(response)) {
        this.infoPoblacion.push({
          data: response[item].data
        });
      }
      this.ordenarestados();
    }, error => {
      console.error(error);
    });

    this.httpClient.get('https://datausa.io/api/data?drilldowns=State&measures=Air%20Pollution&year=latest').toPromise().then((data)=>{
      this.infocontaminacion = data;
    }, (error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });

  }

  clickp(){
    this.contaminacionIsVisible = false;
    this.poblacionIsVisible = true;

  }

  clickc(){
    this.poblacionIsVisible = false;
    this.contaminacionIsVisible = true;
  }

  clickt(){
    var uri = 'http://localhost:3000/api/datos';

    // llamar funcion del token
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'access-token': this.tkn })
    
    
    this.httpClient.post(uri,{test:1},{ headers : headers }).toPromise().then((data)=>{ 
      console.table(data);
	 	}, (err) => {
		  console.log(err);
    });

  }

  ordenarestados(){

    if(this.infoPoblacion.length > 0){
      
      var longinfoedos = this.infoPoblacion[0].data.length;

      for (let i = 0; i < longinfoedos; i++) {
        var edosaux = [];

        var idStateaux = this.infoPoblacion[0].data[i]['ID State']

        for (let l = 0; l < this.infoPoblacion.length; l++) {
          edosaux.push(this.infoPoblacion[l].data.find(elemento => elemento['ID State'] == idStateaux))
        }

        this.infoEdoPoblacion.push(edosaux);
        
      }
    }
  }
}