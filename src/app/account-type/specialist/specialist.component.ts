import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.css']
})
export class SpecialistComponent implements OnInit {

  specialistForm : FormGroup ;
  constructor(public fb:FormBuilder , public router: Router,public userService:UserService,public httpService:HttpService ) {
    this.specialistForm =  this.fb.group({
      personalData:'',
      birthDate:'',
      mobileNumber:'',
      jobTitle:'',
      jobAddress:'',
    })
  }

  ngOnInit() {
  }

    getUserDataSpecialist(){
    let user:User = this.userService.getUser();
    if(this.specialistForm.controls['personalData'].value=="Male"){
      user.setGender("M");
    }else{
      user.setGender("F");
    }

    user.setJobTitle("client");
    user.setBirthDate(this.specialistForm.controls['birthDate'].value)
    // this.clientForm.controls['personalData'].value;
    this.userService.setUser(user);
    // const data = {
    //     firstName: "omar",
    //     lastName: "omaya",
    //     email: "oo1@gmail.com",
    //     password: "19891989",
    //     cpassword: "19891989",
    //     is_Specialist: true,
    //     birthDate: "2022-11-09T18:59:20.037Z",
    //     jobTitle: "string",
    //     gender: "m",
    //     address: "janakles"

    // }

      const dateMapping = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        cpassword: user.cpassword,
        is_Specialist: user.is_Specialist,
        birthDate: "2022-11-09T18:59:20.037Z",
        // birthDate: this.datepipe.transform(user.birthDate, 'yyyy-MM-dd')?.toString,
        jobTitle: this.specialistForm.controls['jobTitle'].value,
        gender: user.gender,
        address: this.specialistForm.controls['jobAddress'].value

    }
    this.httpService.registerUser(JSON.stringify(dateMapping)).subscribe(data =>{
    }, err =>{
      if(err.status==400){
        alert("Please fill your data.")
      }else if(err.status==200){
        this.router.navigateByUrl('login')
      }

    });
  }

  Submit(){
    console.log(this.specialistForm.value)
    this.router.navigateByUrl('calendar')
  }
  Back(){
    this.router.navigateByUrl('signup/accountType')
  }
}
