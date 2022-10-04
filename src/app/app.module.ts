import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({ 
      apiKey: "AIzaSyAU-Zppw7gYcKWWsKB_so1mWjQXcRGPOsc",
      authDomain: "burgertech-e55d8.firebaseapp.com",
      projectId: "burgertech-e55d8",
      storageBucket: "burgertech-e55d8.appspot.com",
      messagingSenderId: "532128150890",
      appId: "1:532128150890:web:69837c8e17fffbc5ee2113"
     }),
     AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
