import { Component, OnInit } from '@angular/core';
import {Circles, CircleService} from '../../share-di/circle.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'circle-detail',
  templateUrl: './circle-detail.component.html',
  styleUrls: ['./circle-detail.component.scss']
})
export class CircleDetailComponent implements OnInit {
  circle: Circles;
  constructor(
    private routerInfo: ActivatedRoute,
    private circleService: CircleService
  ) { }

  ngOnInit() {
    let circleId:number = this.routerInfo.snapshot.params['circleId'];
    this.circle = this.circleService.getCircle(circleId);
  }

}
