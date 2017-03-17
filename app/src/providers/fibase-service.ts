import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the FibaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FibaseService {

  private songs: FirebaseListObservable<any>;

  constructor(public http: Http) {
    console.log('Hello FibaseService Provider');
  }

}
