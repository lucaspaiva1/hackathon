import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition, BackgroundGeolocation } from 'ionic-native';
import 'rxjs/add/operator/filter';

/*
  Generated class for the LocalizationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocalizationService {

  public watch: any;    
  public lat: number = 0;
  public lng: number = 0;
 
  constructor(public zone: NgZone) {
 
  }
 
  startTracking() {
 
  // Background Tracking
 
  let config = {
    desiredAccuracy: 0,
    stationaryRadius: 20,
    distanceFilter: 10, 
    debug: true,
    interval: 2000 
  };
 
  BackgroundGeolocation.configure(config);
 
  // Turn ON the background-geolocation system.
  BackgroundGeolocation.start();
 
 
  // Foreground Tracking
 
  let options = {
    frequency: 300, 
    enableHighAccuracy: true
  };
 
  this.watch = Geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
 
    console.log(position);
 
    // Run update inside of Angular's zone
    this.zone.run(() => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
 
  });
 
}

get(){
  BackgroundGeolocation.getLocations().then(res=>{
    alert(JSON.stringify(res));
  });
}
 
  stopTracking() {
 
 
  }



}
