import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Clubs, ClubService} from '../../share-di/club.service';

@Component({
  selector: 'club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.scss']
})
export class ClubDetailComponent implements OnInit {

  club: Clubs;
  constructor(
    private routerInfo: ActivatedRoute,
    private clubService: ClubService
  ) { }

  ngOnInit() {
    let clubId:number = this.routerInfo.snapshot.params['clubId'];
    this.club = this.clubService.getClub(clubId);
  }

}
