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
"accept": "accept: */*"})
}

  loginUser(loginDto:any): Observable<any>{
    return this.httpClient.post(this.uri+"api/auth/Login", loginDto);
  }

    registerUser(registerDto:any): Observable<any>{
    return this.httpClient.post(this.uri+"api/auth/register", registerDto,this.httpOptions);
  }


  createSchedule(scheduleDto:any){
    return this.httpClient.post(this.uri+"api/Schedule", scheduleDto);
  }

  getSchedule(){
    return this.httpClient.get(this.uri+"api/Schedule");
  }

  editSchedule(updateSchedule:any, id:string|undefined){

    return this.httpClient.put(this.uri+"api/Schedule?id="+id,updateSchedule,this.httpOptions);

  }

  deleteSchedule(id:string|undefined){
    return this.httpClient.delete(this.uri+"api/Schedule/"+id);
  }

  addScheduleByEmail(email:string|null, body:string){
    return this.httpClient.post(this.uri+"api/Schedule/AddScheduleByEmail?Email="+email,body, this.httpOptions)
  }

  getScheduleByUserId(id:string|null){
    return this.httpClient.get(this.uri+"api/User/UserSchedules?id="+id)

  }

  addScheduleByClassCode(classCode:string|undefined , userId:string|null){
    return this.httpClient.post(this.uri+"api/User/AddByClassCode?userId="+userId+"&schId="+classCode,"");
  }

}
