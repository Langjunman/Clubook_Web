import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClubEvent, ClubEventService} from '../../share-di/club-event.service';

@Component({
  selector: 'club-event',
  templateUrl: './club-event.component.html',
  styleUrls: ['./club-event.component.scss']
})
export class ClubEventComponent implements OnInit {

  @Input()
  cle: ClubEvent;


  constructor(    private routerInfo: ActivatedRoute,
                  private cleService: ClubEventService
  ) { }

  ngOnInit() {
    let id:number = this.routerInfo.snapshot.params['id'];
    this.cle = this.cleService.getCle(id);
  }
}
