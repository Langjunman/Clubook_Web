import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Clubs, ClubService} from '../../share-di/club.service';
import {ClubEvent, ClubEventService} from '../../share-di/club-event.service';

@Component({
  selector: 'club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.scss']
})
export class ClubDetailComponent implements OnInit {
  @Input()
  cle: ClubEvent;
  @Input ()
  cleList: ClubEvent[];
  club: Clubs;
  constructor(
    private routerInfo: ActivatedRoute,
    private clubService: ClubService,
    private cleService: ClubEventService
  ) { }

  ngOnInit() {
    let clubId:number = this.routerInfo.snapshot.params['clubId'];
    this.club = this.clubService.getClub(clubId);
    this.cleList = this.cleService.getCles();
  }

}
