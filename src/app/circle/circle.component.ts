import { Component, OnInit } from '@angular/core';
import {Circles} from '../discover/model/circle-model';

@Component({
  selector: 'circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
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
