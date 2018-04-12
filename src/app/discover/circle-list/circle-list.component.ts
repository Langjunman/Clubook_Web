import {Component, Input, OnInit} from '@angular/core';
import {Circles, CircleService} from '../../share-di/circle.service';
import {Clubs, ClubService} from '../../share-di/club.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'circle-list',
  templateUrl: './circle-list.component.html',
  styleUrls: ['./circle-list.component.scss']
})
export class CircleListComponent implements OnInit {
  @Input()
  circleList: Circles[];
  @Input()
  clubList: Clubs[];
  @Input ()
  clubs: Clubs;
  @Input()
  circles: Circles;
  constructor(    private routerInfo: ActivatedRoute,
                  private clubService: ClubService,
                  private circleService: CircleService
  ) {

   }

  ngOnInit() {
    this.clubList = this.clubService.getClubs();
    this.circleList = this.circleService.getCircles();
  }

}
