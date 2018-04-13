import { Injectable } from '@angular/core';

@Injectable()
export class CircleEventService {
  private cieList: CircleEvent[]= [
    new CircleEvent(1, "失物招领", '', new Date(),"http://placehold.it/150x100"),
    new CircleEvent(2, "失物招领", '',new Date(),"http://placehold.it/150x100"),
    new CircleEvent(3, "失物招领", '',new Date(),"http://placehold.it/150x100"),
    new CircleEvent(4, "失物招领", '',new Date(),"http://placehold.it/150x100"),
    new CircleEvent(5, "失物招领", '',new Date(),"http://placehold.it/150x100"),
    new CircleEvent(6, "拼车", '',new Date(),"http://placehold.it/150x100")
  ];
  constructor() { }

  getCies(){
    return this.cieList;
  }

  getCie(id:number): CircleEvent{
    return this.cieList.find((CircleEvent) => CircleEvent.id == id);
  }
}
export class CircleEvent {

  constructor(
    public id: number,
    public title: string,
    public content: string,
    // public circleCreater: string,
    public postTime: Date,
    public  poster: string
  ) { }
}
