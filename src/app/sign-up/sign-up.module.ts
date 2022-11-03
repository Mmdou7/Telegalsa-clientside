import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signupPage/signupPage.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignupPageComponent],

  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports: [SignupPageComponent]
})
export class SignUpModule { }
