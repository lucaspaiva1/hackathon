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

        alert(this.getDistanceFromLatLonInKm(this.lat, this.lng, 0, 0));
      });
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });

  }

  stopTracking() {


  }

  private getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  private deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

}