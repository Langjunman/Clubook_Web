import { Injectable } from '@angular/core';

@Injectable()
export class CircleEventService {
  private cieList: CircleEvent[]= [
    new CircleEvent(1, "失物招领", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹', new Date(),"http://placehold.it/600x800"),
    new CircleEvent(2, "失物招领", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹',new Date(),"http://placehold.it/600x800"),
    new CircleEvent(3, "失物招领", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹',new Date(),"http://placehold.it/600x800"),
    new CircleEvent(4, "失物招领", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹',new Date(),"http://placehold.it/600x800"),
    new CircleEvent(5, "失物招领", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹',new Date(),"http://placehold.it/600x800"),
    new CircleEvent(6, "拼车", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹',new Date(),"http://placehold.it/600x800")
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
    public author: string,
    public content: string,
    // public circleCreater: string,
    public postTime: Date,
    public  poster: string
  ) { }
}
