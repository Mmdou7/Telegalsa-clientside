export class User{


  firstName: string|null;
  lastName: string|null;
  email: string|null;
  password: string|null;
  cpassword:string|null;
  is_Specialist!:boolean|null;
  birthDate:Date|null;
  jobTitle:string|null;
  gender:string|null;
  address:string|null;

  constructor(){
    this.firstName =null;
    this.lastName = null,
    this.email =null;
    this.password = null;
    this.cpassword = null;
    this.birthDate = null;
    this.jobTitle = null;
    this.gender = null;
    this.address = "Client";
    this.is_Specialist = null;
  }

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

  public setBirthDate(birithDate:string){
    this.birthDate = new Date(birithDate);
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
