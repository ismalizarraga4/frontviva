import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(protected http: HttpClient) { }

  getDatos2016() {
    return this.http.get('https://datausa.io/api/data?drilldowns=State&measures=Population&year=2016');
  }

  getDatos2017() {
    return this.http.get('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest');
  }

  getDatos2018() {
    return this.http.get(' https://datausa.io/api/data?drilldowns=State&measures=Air%20Pollution&year=latest');
  }

}
