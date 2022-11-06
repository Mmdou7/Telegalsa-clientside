import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomlyScheduleComponent } from './Randomly/randomlySchedule/randomlySchedule.component';
import { WeeklyScheduleComponent } from './weekly/weeklySchedule/weeklySchedule.component';
import { DailyScheduleComponent } from './daily/dailySchedule/dailySchedule.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RandomlyScheduleComponent,WeeklyScheduleComponent,DailyScheduleComponent,ScheduleComponent],
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  exports: [RandomlyScheduleComponent,WeeklyScheduleComponent,DailyScheduleComponent,ScheduleComponent]
})
export class ScheduleModule { }
