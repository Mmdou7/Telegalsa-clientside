export class Schedule{
  id! : string
  startDate!: Date;
  sessionTitle!: string;

  public setId(id:string){
    this.id = id;
  }
  public getId(){
    return this.id;
  }

  public  getStartDate(){
    return this.startDate;
  }

    public getSessionTitle(){
    return this.sessionTitle;
  }

    public setSessionTitle(sessionTitle: string) {
      this.sessionTitle = sessionTitle;
    }


    public setStartDate(startDate: string) {
      this.startDate = new Date(startDate);
    }

}
