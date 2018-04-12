import { Injectable } from '@angular/core';


@Injectable()
export class CircleService {

  private circleList:Circles[]= [
    new Circles(1, "失物招领", 2324,"http://placehold.it/150x100",''),
    new Circles(2, "失物招领", 2324,"http://placehold.it/150x100",''),
    new Circles(3, "失物招领", 2324,"http://placehold.it/150x100",''),
    new Circles(4, "失物招领", 2324,"http://placehold.it/150x100",''),
    new Circles(5, "失物招领", 2324,"http://placehold.it/150x100",''),
    new Circles(6, "拼车", 2324,"http://placehold.it/150x100",'')
  ];
  constructor() { }

  getCircles(){
    return this.circleList;
  }

  getCircle(id:number): Circles{
    return this.circleList.find((Circles) => Circles.circleId == id);
  }

}

export class Circles {

  constructor(
    public circleId: number,
    public circleName: string,
    public circleMembers: number,
    // public circleCreater: string,
    public circleAvatar: string,
    public  circleIntro: string
  ) { }
}
