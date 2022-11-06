import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountType',
  templateUrl: './accountType.component.html',
  styleUrls: ['./accountType.component.css']
})
export class AccountTypeComponent implements OnInit {

  constructor(public router:Router) { }

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
