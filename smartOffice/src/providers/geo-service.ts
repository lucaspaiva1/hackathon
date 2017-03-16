import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition } from 'ionic-native';
import 'rxjs/add/operator/filter';

/*
  Generated class for the GeoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GeoService {

  public lat: number = 0;
  public lng: number = 0;
  constructor(public zone: NgZone) {
    console.log('Hello GeoService Provider');
  }

  startTracking() {

    Geolocation.getCurrentPosition().then((resp) => {
      alert("Latitude " + resp.coords.latitude + " longitude " + resp.coords.longitude);

      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let options = {
      frequency: 1000,
      enableHighAccuracy: true
    };

    let watch = Geolocation.watchPosition(options);
    watch.subscribe((data) => {
      this.zone.run(() => {
        this.lat = data.coords.latitude;
        this.lng = data.coords.longitude;
      });
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });

  }

  stopTracking() {


  }

}
