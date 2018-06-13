import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CircleEvent, CircleEventService} from '../../share-di/circle-event.service';
import {Circles, CircleService} from '../../share-di/circle.service';

@Component({
  selector: 'circle-event',
  templateUrl: './circle-event.component.html',
  styleUrls: ['./circle-event.component.scss']
})
export class CircleEventComponent implements OnInit {
  @Input()
  cie: CircleEvent;
  @Input()
  circle: Circles;

  constructor(    private routerInfo: ActivatedRoute,
                  private cieService: CircleEventService,
                  private circleService: CircleService,
                  public router: Router,
                  public activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    let id:number = this.routerInfo.snapshot.params['id'];
    let circleId:number = this.routerInfo.snapshot.params['circleId'];

    this.circle = this.circleService.getCircle(circleId);

    this.cie = this.cieService.getCie(id);
  }
  goBack() {
    history.go(-1);
  }
}
