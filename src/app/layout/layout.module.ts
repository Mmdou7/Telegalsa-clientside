import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupLayoutComponent } from './signup-layout/signup-layout.component';
import { SigninLayoutComponent } from './signin-layout/signin-layout.component';
import { CoreModule } from '../core/core.module';
import { LoginpageModule } from './../loginpage/loginpage.module';
import { SignUpModule } from './../sign-up/sign-up.module';





@NgModule({
  declarations: [
    SignupLayoutComponent,
    SigninLayoutComponent,

  ],
  imports: [
CommonModule,
  CoreModule,
  LoginpageModule,
  SignUpModule

  ],
  exports: [SigninLayoutComponent,SignupLayoutComponent]
})
export class LayoutModule { }
