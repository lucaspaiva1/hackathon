import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LocalizationService } from '../providers/localization-service';
import { FibaseService } from '../providers/fibase-service';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyC4yjYlauhhKOYLWZxVkjsed3pMSC0h0Kc",
  authDomain: "setor-juventude-2b5e2.firebaseapp.com",
  databaseURL: "https://setor-juventude-2b5e2.firebaseio.com",
  storageBucket: "setor-juventude-2b5e2.appspot.com",
  messagingSenderId: "385614889653"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, LocalizationService, FibaseService]
})
export class AppModule { }
