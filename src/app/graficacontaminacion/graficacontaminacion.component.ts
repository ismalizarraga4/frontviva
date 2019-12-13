import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficacontaminacion',
  templateUrl: './graficacontaminacion.component.html',
  styleUrls: ['./graficacontaminacion.component.sass']
})
export class GraficacontaminacionComponent implements OnInit {

  @Input() InfoContaminacion : object;

  edocontaminacion : any[] = [];

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < this.InfoContaminacion['data'].length; i++) {

      this.edocontaminacion.push({
        IdState : this.InfoContaminacion['data'][i]['ID State'],
        Year : this.InfoContaminacion['data'][i].Year,
        State : this.InfoContaminacion['data'][i].State,
        AirPollution : this.InfoContaminacion['data'][i]['Air Pollution'],
        AirPollutiont : (this.InfoContaminacion['data'][i]['Air Pollution']).toFixed(3),
        styleAirPollution:  {
          width: ((this.InfoContaminacion['data'][i]['Air Pollution'])*100)/3 + "px"
        }
      });
      
    }
  }
}
