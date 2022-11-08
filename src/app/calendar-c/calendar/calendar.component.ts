import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar/modules/calendar.module';
import { WeekDay } from 'calendar-utils';
import { addDays, endOfDay, startOfDay, subDays } from 'date-fns';
import { scheduled, Subject } from 'rxjs';
import { HttpService } from 'src/app/http.service';



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
  constructor(public httpServices:HttpService) {  }


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

  events : Array<CalendarEvent> = [
    // {
    //   start: subDays(startOfDay(new Date()), 0),
    //   end: addDays(new Date(), 1),
    //   title: 'A 3 day event',
    //   color: { ...colors.red },
    //   allDay: true,
    //   actions : this.actions,
    //   resizable: {
    //     beforeStart: false,
    //     afterEnd: false,
    //   },
    //   draggable: false,

    // }
  ]

  response: any;

  getEvents(){
    this.httpServices.getSchedule ().subscribe(data =>{
      this.response = data;
      for(let schedule of this.response){

        this.events.push(
          {
          start: new Date(schedule.startDate),
          title: schedule.sessionTitle,
          color: { ...colors.red },
          allDay: false,
          actions : this.actions,
          resizable: {
            beforeStart: false,
            afterEnd: false,
          },
          draggable: false,
        }
      )
      this.refresh.next();
      }
    }, erro =>{
      console.log(erro);
    });

  }




  // events: CalendarEvent[]= [
  //   {
  //     start: subDays(startOfDay(new Date()), 0),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: { ...colors.red },
  //     allDay: true,
  //     actions : this.actions,
  //     resizable: {
  //       beforeStart: false,
  //       afterEnd: false,
  //     },
  //     draggable: false,


  //   }

  // ]



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

  EditEvent(eventToEdit:CalendarEvent){
    this.events = this.events.filter((event) => event !== eventToEdit);
        this.events = [
      ...this.events,
      {
        title: eventToEdit.title,
        start: eventToEdit.start,
        end: eventToEdit.end,
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];


  }





  ngOnInit(): void {
    this.getEvents();

  }

   deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

}
