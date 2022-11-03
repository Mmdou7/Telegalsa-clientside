import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginpageModule } from './loginpage/loginpage.module';
import { CoreModule } from './core/core.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginpage/login/login.component';
import { SignupPageComponent } from './sign-up/signupPage/signupPage.component';

const routes:Routes = [
  { path: 'login',component: LoginComponent},
  { path: 'signup' , component: SignupPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    LoginpageModule,
    CoreModule,
    SignUpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
