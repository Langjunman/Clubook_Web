import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CircleEvent, CircleEventService} from '../../share-di/circle-event.service';

@Component({
  selector: 'circle-event',
  templateUrl: './circle-event.component.html',
  styleUrls: ['./circle-event.component.scss']
})
export class CircleEventComponent implements OnInit {
  @Input()
  cie: CircleEvent;


  constructor(    private routerInfo: ActivatedRoute,
                  private cieService: CircleEventService
  ) { }

  ngOnInit() {
    let id:number = this.routerInfo.snapshot.params['id'];
    this.cie = this.cieService.getCie(id);
  }

}
