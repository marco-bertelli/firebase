import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ AngularFireModule } from '@angular/fire';
import{ AngularFirestoreModule } from '@angular/fire/firestore';
import{ AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MDBBootstrapModulesPro.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
