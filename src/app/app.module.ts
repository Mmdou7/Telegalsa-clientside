import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginpageModule } from './loginpage/loginpage.module';
import { CoreModule } from './core/core.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CalendarCModule } from './calendar-c/calendar-c.module';





@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoginpageModule,
    CoreModule,
    SignUpModule,
    CalendarCModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
