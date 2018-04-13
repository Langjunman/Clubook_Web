import {Component, Input, OnInit} from '@angular/core';
import {Circles, CircleService} from '../../share-di/circle.service';
import {ActivatedRoute} from '@angular/router';
import {CircleEvent, CircleEventService} from '../../share-di/circle-event.service';

@Component({
  selector: 'circle-detail',
  templateUrl: './circle-detail.component.html',
  styleUrls: ['./circle-detail.component.scss']
})
export class CircleDetailComponent implements OnInit {
  circle: Circles;
  @Input ()
  cieList: CircleEvent[];
  @Input()
  cie: CircleEvent;
  constructor(
    private routerInfo: ActivatedRoute,
    private circleService: CircleService,
    private cieService: CircleEventService
  ) { }

  ngOnInit() {
    let circleId:number = this.routerInfo.snapshot.params['circleId'];
    this.circle = this.circleService.getCircle(circleId);
    this.cieList = this.cieService.getCies();
  }

}
