import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar/modules/calendar.module';
import { WeekDay } from 'calendar-utils';
import { addDays, endOfDay, startOfDay, subDays } from 'date-fns';
import { Subject } from 'rxjs';



const colors: any = {
    red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  viewDate : Date = new Date();

  days : WeekDay = {
    date: new Date(),
    day: 1,
    isPast: false,
    isToday: false,
    isFuture: false,
    isWeekend: false
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
      },
    },
  ];

  print(event:any){
    console.log(event);
  }



  events: CalendarEvent[]= [
    {
      start: subDays(startOfDay(new Date()), 0),
      end: addDays(new Date(), 2),
      title: 'A 3 day event',
      color: { ...colors.red },
      allDay: true,
      actions : this.actions,
      resizable: {
        beforeStart: false,
        afterEnd: false,
      },
      draggable: false,


    }

  ]
  refresh = new Subject<void>();
  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }




  constructor() { }

  ngOnInit(): void {
  }

}
