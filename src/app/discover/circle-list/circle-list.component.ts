import { Component, OnInit } from '@angular/core';
import {Circles} from '../model/circle-model';
@Component({
  selector: 'circle-list',
  templateUrl: './circle-list.component.html',
  styleUrls: ['./circle-list.component.scss']
})
export class CircleListComponent implements OnInit {

  circleList: Circles[];

  constructor() {
    this.circleList = [
      new Circles(1, "失物招领", 2324),
      new Circles(1, "失物招领", 2324),
      new Circles(1, "失物招领", 2324),
      new Circles(1, "失物招领", 2324),
      new Circles(1, "失物招领", 2324),
      new Circles(2, "拼车", 2324)
    ];
   }

  ngOnInit() {

  }

}
