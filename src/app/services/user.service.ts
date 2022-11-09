import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  user : User = new User();
  constructor() { }

  getUser(){
    return this.user;
  }

  setUser(user:User){
    this.user=user;
  }


}
