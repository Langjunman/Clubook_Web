import { Injectable } from '@angular/core';
@Injectable()
export class ClubEventService {
  private cleList: ClubEvent[]= [
    new ClubEvent(1, "失物招领", '', new Date(),"http://placehold.it/150x100"),
    new ClubEvent(2, "失物招领", '',new Date(),"http://placehold.it/150x100"),
    new ClubEvent(3, "失物招领", '',new Date(),"http://placehold.it/150x100"),
    new ClubEvent(4, "失物招领", '',new Date(),"http://placehold.it/150x100"),
    new ClubEvent(5, "失物招领", '',new Date(),"http://placehold.it/150x100"),
    new ClubEvent(6, "拼车", '',new Date(),"http://placehold.it/150x100")
  ];
  constructor() { }

  getCles(){
    return this.cleList;
  }

  getCle(id:number): ClubEvent{
    return this.cleList.find((ClubEvent) => ClubEvent.id == id);
  }
}
export class ClubEvent {

  constructor(
    public id: number,
    public title: string,
    public content: string,
    // public circleCreater: string,
    public postTime: Date,
    public  poster: string
  ) { }
}
