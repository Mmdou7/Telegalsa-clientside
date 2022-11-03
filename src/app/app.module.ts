import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginpageModule } from './loginpage/loginpage.module';
import { CoreModule } from './core/core.module';
import { SignUpModule } from './sign-up/sign-up.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
