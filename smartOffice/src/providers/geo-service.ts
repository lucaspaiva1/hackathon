import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition } from 'ionic-native';
import 'rxjs/add/operator/filter';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the GeoService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GeoService {
  private key: string = "-KfOaJ1Tevv_LI99JFc8";
  public lat: number = 0;
  public lng: number = 0;
  public dist: number = 0;
  public Servidorlat: number = 0;
  public Servidorlng: number = 0;
  private valor: FirebaseListObservable<any>;
  private statusAr: boolean = false;
  public automatico: boolean = false;

  constructor(private af: AngularFire, public zone: NgZone) {
    console.log('Hello GeoService Provider');
    this.valor = af.database.list('/hackathon');
    this.valor.subscribe(x => {
      this.statusAr = x[0].ar;

    });
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
      frequency: 100,
      enableHighAccuracy: true
    };

    let watch = Geolocation.watchPosition(options);
    watch.subscribe((data) => {
      this.zone.run(() => {
        this.lat = data.coords.latitude;
        this.lng = data.coords.longitude;
        if (this.automatico) {
          this.dist = this.getDistanceFromLatLonInKm(this.lat, this.lng, this.Servidorlat, this.Servidorlng);
          if (this.dist > 0.005 && this.statusAr) {
            this.valor.update(this.key, {
              ar: false
            });
          } else if (this.dist <= 0.005 && !this.statusAr) {
            this.valor.update(this.key, {
              ar: true
            });
          }
        }
      });
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });

  }

  stopTracking() {


  }

  private deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

  private getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    var deg2Rad = deg => {
      return deg * Math.PI / 180;
    }

    var r = 6371; // Radius of the earth in km
    var dLat = deg2Rad(lat2 - lat1);
    var dLon = deg2Rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2Rad(lat1)) * Math.cos(deg2Rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = r * c; // Distance in km
    return d;
  }




}

