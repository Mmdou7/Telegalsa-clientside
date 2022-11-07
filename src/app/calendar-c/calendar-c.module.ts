import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { AccountTypeModule } from '../account-type/account-type.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import {CalendarModule as CalenderNg} from 'primeng/calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    AccountTypeModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    CalenderNg,
    BrowserAnimationsModule


  ],
  exports : [
    CalendarComponent
  ]
})
export class CalendarCModule { }
