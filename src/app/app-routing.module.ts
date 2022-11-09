import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountTypeComponent } from './account-type/accountType/accountType.component';
import { ClientComponent } from './account-type/client/client.component';
import { SpecialistComponent } from './account-type/specialist/specialist.component';
import { AuthGuard } from './auth.guard';
import { CalendarComponent } from './calendar-c/calendar/calendar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AccountLayoutComponent } from './layout/account-layout/account-layout.component';
import { CalendarLayoutComponent } from './layout/calendar-layout/calendar-layout.component';
import { SigninLayoutComponent } from './layout/signin-layout/signin-layout.component';
import { SignupLayoutComponent } from './layout/signup-layout/signup-layout.component';
import { DailyScheduleComponent } from './schedule/daily/dailySchedule/dailySchedule.component';
import { RandomlyScheduleComponent } from './schedule/Randomly/randomlySchedule/randomlySchedule.component';
import { ScheduleComponent } from './schedule/schedule/schedule/schedule.component';
import { WeeklyScheduleComponent } from './schedule/weekly/weeklySchedule/weeklySchedule.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SigninLayoutComponent
  },
  {
    path: 'signup',
    component: SignupLayoutComponent
  },
  {
    path: 'signup/accountType',
    component: AccountLayoutComponent,
    children:[
      {path: 'specialist', component: SpecialistComponent},
      {path: 'client' , component: ClientComponent }
    ],
    // canActivate: [AuthGuard]

  },

  // {
  //   path: 'signup/accountType/schedule',
  //   component: ScheduleComponent,
  //   children:[
  //     { path: 'randomly' , component: RandomlyScheduleComponent },
  //     { path : 'weekly' , component : WeeklyScheduleComponent },
  //     { path: 'daily' , component : DailyScheduleComponent }
  //   ],
  //   canActivate: [AuthGuard]

  // },
 

  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'calendar',
    component: CalendarLayoutComponent,
    //canActivate: [AuthGuard]

  },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

