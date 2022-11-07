import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto } from './models/loginDto';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  uri:string ="https://localhost:7285/"

  constructor(private httpClient : HttpClient  ) { }

  loginUser(loginDto:any): Observable<any>{
    let test  = this.httpClient.post(this.uri+"api/User/Login", loginDto);
    console.log(test);
    return test ;
  }
}
