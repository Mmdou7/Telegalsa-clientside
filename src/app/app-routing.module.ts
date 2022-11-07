import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountTypeComponent } from './account-type/accountType/accountType.component';
import { ClientComponent } from './account-type/client/client.component';
import { SpecialistComponent } from './account-type/specialist/specialist.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './loginpage/login/login.component';
import { DailyScheduleComponent } from './schedule/daily/dailySchedule/dailySchedule.component';
import { RandomlyScheduleComponent } from './schedule/Randomly/randomlySchedule/randomlySchedule.component';
import { ScheduleComponent } from './schedule/schedule/schedule/schedule.component';
import { WeeklyScheduleComponent } from './schedule/weekly/weeklySchedule/weeklySchedule.component';
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
    path: 'signup/accountType/schedule',
    component: ScheduleComponent,
    children:[
      { path: 'randomly' , component: RandomlyScheduleComponent },
      { path : 'weekly' , component : WeeklyScheduleComponent },
      { path: 'daily' , component : DailyScheduleComponent }
    ]
  },
  {
    path: 'about',
    component: AboutUsComponent,
    canActivate: [AuthGuard]
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

