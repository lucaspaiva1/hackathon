import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BackgroundGeolocation } from 'ionic-native';

/*
  Generated class for the LocalizationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocalizationService {

  constructor(public http: Http) {
    console.log('Hello LocalizationService Provider');
  }

  public getLocalization(){
    BackgroundGeolocation.getLocations().then(res=>{
      alert(JSON.stringify(res));
    });
  }

}
