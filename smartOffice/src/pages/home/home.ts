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
  private automatico: boolean = false;
  private key: string = "-KfOaJ1Tevv_LI99JFc8";
  private temp: number = 20;
  private valor: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire, private geoService: GeoService) {
    this.valor = af.database.list('/hackathon');

    this.valor.subscribe(x => {
      if (x.length > 0) {
        console.log(x[0].ligar);
      }
    });

  }

  resetTemp() {
    this.temp = 20;
  }

  lampada(status) {
    status = !status;
    this.valor.update(this.key, {
      lamp: status
    });
  }

  cafe(status) {
    status = !status;
    this.valor.update(this.key, {
      cafe: status
    });
  }

  localizar() {
    this.geoService.startTracking();
  }

  salvarInstancia() {
    this.valor.update(this.key, {
      lat: this.geoService.lat,
      lng: this.geoService.lng
    });
  }

  ligarAr(status) {
    status = !status;
    this.valor.update(this.key, {
      ar: status
    });

    this.valor.subscribe(x => {
      this.geoService.Servidorlat = x[0].lat;
      this.geoService.Servidorlng = x[0].lng;
    });
  }

  mudouTemp() {
    //funcao chamada quando muda temp
    this.valor.update(this.key, {
      tempD: this.temp
    });
  }

  automaticoAr(status) {
    this.automatico = status;
    this.geoService.automatico = status;
  }



}
