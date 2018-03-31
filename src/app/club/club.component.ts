import { Component, OnInit } from '@angular/core';
import {Clubs} from './model/club-model';

@Component({
  selector: 'club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {

  clubList: Clubs[];
  constructor() {
    this.clubList = [
      new Clubs(1, "小觅音", 6324),
      new Clubs(2, "吉他社", 232),
      new Clubs(3, "音乐社", 1),
      new Clubs(4, "书法社", 2222),
      new Clubs(5, "健美社", 24),
      new Clubs(6, "电竞社", 324)
    ];
  }


  ngOnInit() {
  }

}
