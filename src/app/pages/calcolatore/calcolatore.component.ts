import { Component } from '@angular/core';

@Component({
  selector: 'app-calcolatore',
  templateUrl: './calcolatore.component.html',
  styleUrls: ['./calcolatore.component.css']
})
export class CalcolatoreComponent {

  watt: number = 1100
  ore: number = 2
  result: string = ""



  calculate(): void{
    if(this.watt  >= 1 && this.ore >=  1){
      let kilo_watt_ora = (this.watt * this.ore) / 1000
      this.result = kilo_watt_ora.toString() + "Kwh"
    }
    else{
      this.result = "Ops hai inserito dei valori non accettabili..."
      this.watt = 100
      this.ore = 1
    }
  }

}
