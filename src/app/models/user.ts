export class User{


  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  cpassword!:string;
  is_Specialist!:boolean;
  birthDate!:Date;
  jobTitle!:string;
  gender!:string;
  address!:string;

  public setFirstName(firstName:string){
    this.firstName=firstName;
  }

    public setLastName(lastName:string){
    this.lastName=lastName;
  }

  public setEmail(email:string){
    this.email=email;
  }

  public setPassword(password:string){
    this.password = password;
  }

  public setCPassword(cpassword:string){
    this.cpassword = cpassword;
  }

  public setSpecialist(is_Specialist:boolean){
    this.is_Specialist = is_Specialist;
  }

  public setBirthDate(birithDate:Date){
    this.birthDate = birithDate;
  }

  public setJobTitle(jobTitle:string){
    this.jobTitle = jobTitle;
  }

  public setGender(gender:string){
    this.gender = gender;
  }

  public setAddress(address:string){
    this.address = address;
  }





  // public getStartDate(){
  //   return this.startDate;
  // }

  //   public getSessionTitle(){
  //   return this.sessionTitle;
  // }

  //   public setSessionTitle(sessionTitle: string) {
  //     this.sessionTitle = sessionTitle;
  //   }


  //   public setStartDate(startDate: Date) {
  //     this.startDate = startDate;
  //   }

}
