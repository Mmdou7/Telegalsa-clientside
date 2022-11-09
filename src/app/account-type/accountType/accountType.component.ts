import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-accountType',
  templateUrl: './accountType.component.html',
  styleUrls: ['./accountType.component.css']
})
export class AccountTypeComponent implements OnInit {

  constructor(public router:Router,public userServices: UserService) { }

  is_Specialist :boolean = false;

  isSpecialist(){
    let user:User = this.userServices.getUser();
    this.is_Specialist = true;
    user.setSpecialist(this.is_Specialist);
    this.userServices.setUser(user);
    console.log(user);

  }

    isClient(){
    let user:User = this.userServices.getUser();
    this.is_Specialist = false;
    user.setSpecialist(this.is_Specialist);
    this.userServices.setUser(user);
    console.log(user);
    this.router.navigateByUrl('/signup/accountType/client');


  }


  ngOnInit() {
  }
  specialist(){
    this.router.navigateByUrl('/signup/accountType/specialist');
  }
  client(){
    this.router.navigateByUrl('/signup/accountType/client');

  }
  Back(){
    this.router.navigateByUrl('/signup')
  }
  Next(){
    this.router.navigateByUrl('/signup/accountType/schedule')

  }
}
