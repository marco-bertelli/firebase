import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSigninDirective } from './google-signin.directive';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';


@NgModule({
  declarations: [LoginPageComponent, GoogleSigninDirective],
  imports: [
    CommonModule,
    UserRoutingModule,
    MDBBootstrapModulesPro.forRoot()
  ]
})
export class UserModule { }
