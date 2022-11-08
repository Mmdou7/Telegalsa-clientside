export class Schedule{
  startDate!: Date;
  sessionTitle!: string;

  public  getStartDate(){
    return this.startDate;
  }

    public getSessionTitle(){
    return this.sessionTitle;
  }

    public setSessionTitle(sessionTitle: string) {
      this.sessionTitle = sessionTitle;
    }


    public setStartDate(startDate: Date) {
      this.startDate = startDate;
    }

}
