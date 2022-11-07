import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupLayoutComponent } from './signup-layout/signup-layout.component';
import { SigninLayoutComponent } from './signin-layout/signin-layout.component';
import { CoreModule } from '../core/core.module';
import { LoginpageModule } from './../loginpage/loginpage.module';
import { SignUpModule } from './../sign-up/sign-up.module';
import { CalendarLayoutComponent } from './calendar-layout/calendar-layout.component';
import { CalendarCModule } from '../calendar-c/calendar-c.module';





@NgModule({
  declarations: [
    SignupLayoutComponent,
    SigninLayoutComponent,
    CalendarLayoutComponent,

  ],
  imports: [
CommonModule,
  CoreModule,
  LoginpageModule,
  SignUpModule,
  CalendarCModule

  ],
  exports: [SigninLayoutComponent,SignupLayoutComponent]
})
export class LayoutModule { }
