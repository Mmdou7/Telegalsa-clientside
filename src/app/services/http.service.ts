import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  uri:string ="https://localhost:7285/"

  constructor(private httpClient : HttpClient  ) { }

  public httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json',
"accept": "accept: */*" })
}

  public httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json',
"accept": "accept: */*" , "Authorization" : "Bearer " + localStorage.getItem("token")})
}

  loginUser(loginDto:any): Observable<any>{
    return this.httpClient.post(this.uri+"api/auth/Login", loginDto);
  }

    registerUser(registerDto:any): Observable<any>{
    return this.httpClient.post(this.uri+"api/auth/register", registerDto,this.httpOptions);
  }


  createSchedule(scheduleDto:any){
    return this.httpClient.post(this.uri+"api/Schedule", scheduleDto,this.httpOption);
  }

  getSchedule(){
    return this.httpClient.get(this.uri+"api/Schedule",this.httpOption);
  }

  editSchedule(updateSchedule:any, id:string|undefined){

    return this.httpClient.put(this.uri+"api/Schedule?id="+id,updateSchedule,this.httpOption);

  }

  deleteSchedule(id:string|undefined){
    return this.httpClient.delete(this.uri+"api/Schedule/"+id,this.httpOption);
  }

  addScheduleByEmail(email:string|null, body:string){
    return this.httpClient.post(this.uri+"api/Schedule/AddScheduleByEmail?Email="+email,body, this.httpOption)
  }

  getScheduleByUserId(id:string|null){
    return this.httpClient.get(this.uri+"api/User/UserSchedules?id="+id,this.httpOption)

  }

  addScheduleByClassCode(classCode:string|undefined , userId:string|null){
    return this.httpClient.post(this.uri+"api/User/AddByClassCode?userId="+userId+"&schId="+classCode,"",this.httpOption);
  }

  getScheduleById(id:string){
    return this.httpClient.get(this.uri+"/api/User/UserSchedules2?id="+id, this.httpOption)
  }

}
