import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar/modules/calendar.module';
import { WeekDay } from 'calendar-utils';
import { addDays, endOfDay, startOfDay, subDays } from 'date-fns';
import { scheduled, Subject } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Schedule } from './../../models/schedule';



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

  schedule: Schedule = new Schedule();
  classCode : string | undefined

  change(event:any){
    this.classCode = event.target.value;
  }

  viewDate : Date = new Date();
  constructor(public httpServices:HttpService) {  }

  addByClassCode(){
    let userId: string|null = localStorage.getItem('id');
    this.httpServices.addScheduleByClassCode(this.classCode, userId).subscribe(data =>{
      alert("Successfuly added to the calendar");
      console.log(data);
      this.getEvents();

    },
    err =>{
      alert("Enter valid Code");

    }
    )
  }



  days : WeekDay = {
    date: new Date(),
    day: 1,
    isPast: false,
    isToday: false,
    isFuture: false,
    isWeekend: false
  }

  display: boolean = false;
  displayClient :boolean = false;

  showDialog() {
      this.display = true;
  }

    showClient() {
      this.displayClient = true;
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

  ]

  response: any;



  getEvents(){
    let userId = localStorage.getItem("id");
    this.httpServices.getScheduleByUserId(userId).subscribe(data =>{
      this.response = data;

      for(let schedule of this.response){
        let perSchedule = schedule.schedule;

        this.events.push(
          {
          id: perSchedule.id,
          start: addDays(new Date(perSchedule.startDate),1),
          title: perSchedule.sessionTitle,
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




  refresh = new Subject<void>();

  testing(){
    console.log(localStorage.getItem('isSpecialist'));
  }

  addEvent(): void {
    let email:string|null = localStorage.getItem('username');
    let r = (Math.random() + 1).toString(36).substring(7);
    this.schedule.setId(r);
    this.schedule.setSessionTitle("set the title");
    this.schedule.setStartDate(formatDate(new Date(), 'yyyy/dd/MM', 'en'));

    this.httpServices.addScheduleByEmail(email,JSON.stringify(this.schedule)).subscribe(data =>{
      alert("schedule added to the list");
      console.log(data);
    }, erro =>{
      console.log(erro)
    });


    this.events = [
      ...this.events,
      {

        id:r,
        title: 'set the title',
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
    console.log(eventToEdit);
    // this.schedule.setStartDate(addDays(this.schedule.getStartDate(),1));
    console.log(eventToEdit)
    this.httpServices.editSchedule(JSON.stringify(this.schedule),eventToEdit.id?.toString()).subscribe(data =>{
      this.refresh.next();
    });
        this.events = [
      ...this.events,
      {
        id : eventToEdit.id,
        title: this.schedule.getSessionTitle(),
        start: this.schedule.getStartDate(),
        // end: eventToEdit.end,
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];


  }
  checkingUser:boolean = this.checkUser();

  checkUser(){
    let check =localStorage.getItem("isSpecialist");
    if(check=="false"){
      return false;
    }else{
      return true;
    }

  }



  ngOnInit(): void {
    this.getEvents();
    // this.checkingUser=this.checkUser();

  }

   deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
    this.httpServices.deleteSchedule(eventToDelete.id?.toString()).subscribe(data =>{
      console.log(data);
    });
    // console.log()
  }

}
