import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';//pour configurer Firebase

import { environment } from 'src/environments/environment';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';//pour accéder à Firestore

import { ReactiveFormsModule } from '@angular/forms';//pour pouvoir travailler avec ngModule


import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    AngularFirestoreModule,
    ReactiveFormsModule ,
     
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },JwtHelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}


