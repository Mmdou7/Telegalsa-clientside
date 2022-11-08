import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto } from './models/loginDto';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  uri:string ="https://localhost:7285/"

  constructor(private httpClient : HttpClient  ) { }

  public httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

  loginUser(loginDto:any): Observable<any>{
    return this.httpClient.post(this.uri+"api/auth/Login", loginDto);
 ;
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

}
