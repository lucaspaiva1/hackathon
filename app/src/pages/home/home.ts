import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private auto: boolean = false;
  private autoAr: boolean = false;
  private autoCaf: boolean = false;
  private onOff: boolean = false;
  private onOffAr: boolean = false;
  private onOffCaf: boolean = false;
  private temp: number = 20;

  constructor(public navCtrl: NavController) {

  }

  resetTemp(){
    this.temp = 20;
  }

}
