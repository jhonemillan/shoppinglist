import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule } from 'angularfire2'
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './FireBaseConfig';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { ShoppingProvider } from '../providers/shopping/shopping.service';
import { ToastProvider } from '../providers/toast/toast';
@NgModule({
  declarations: [
    MyApp
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingProvider,
    ToastProvider
  ]
})
export class AppModule {}
