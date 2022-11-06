import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountTypeComponent } from './account-type/accountType/accountType.component';
import { ClientComponent } from './account-type/client/client.component';
import { SpecialistComponent } from './account-type/specialist/specialist.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './loginpage/login/login.component';
import { SignupPageComponent } from './sign-up/signupPage/signupPage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: 'signup/accountType',
    component: AccountTypeComponent,
    children:[
      {path: 'specialist', component: SpecialistComponent},
      {path: 'client' , component: ClientComponent }
    ]
  },
  {
    path: 'about',
    component: AboutUsComponent
  },

  {
    path: 'contactus',
    component: ContactUsComponent
  },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

