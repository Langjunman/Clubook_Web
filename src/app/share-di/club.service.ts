import { Injectable } from '@angular/core';

@Injectable()
export class ClubService {

    private clubList:Clubs[] = [
    new Clubs(1, "小觅音", 6324,'',"http://placehold.it/150x100"),
    new Clubs(2, "吉他社", 232,'',"http://placehold.it/150x100"),
    new Clubs(3, "音乐社", 1,'',"http://placehold.it/150x100"),
    new Clubs(4, "书法社", 2222,'',"http://placehold.it/150x100"),
    new Clubs(5, "健美社", 24,'',"http://placehold.it/150x100"),
    new Clubs(6, "电竞社", 324,'',"http://placehold.it/150x100")
  ];
  constructor() { }
  getClubs(){
    return this.clubList;
  }

  getClub(id:number):Clubs{
    return this.clubList.find((Clubs) => Clubs.clubId == id);
  }
}
export class Clubs{
  constructor(
    public clubId: number,
    public clubName: string,
    public clubMembers: number,
    public clubIntro:string,
    public clubAvatar:string
  ){

  }
}
