import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MDBBootstrapModulesPro.forRoot()
  ]
})
export class HomeModule { }
