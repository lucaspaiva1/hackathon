import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FirebaseService } from '../../providers/firebase-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { GeoService } from '../../providers/geo-service';

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
  private songs: FirebaseListObservable<any>;
  private teste: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire, private geoService: GeoService) {
    this.songs = af.database.list('/users');
    this.teste = af.database.list('/users/',{
      query: {
        orderByChild: '-KfO-37ylJz2qlkFgxxp'
      }
    });
    
    console.log(this.teste);

  }

  resetTemp() {
    this.temp = 20;
  }

  lampada(status, key) {
    console.log(status);
    status = !status;
    this.songs.update("-KfO-37ylJz2qlkFgxxp", {
      ligar: status
    });
  }

  localizar(){
    this.geoService.startTracking();
  }

}
