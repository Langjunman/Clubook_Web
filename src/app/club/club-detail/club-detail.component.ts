import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Clubs, ClubService} from '../../share-di/club.service';
import {ClubEvent, ClubEventService} from '../../share-di/club-event.service';
import {CircleEvent} from '../../share-di/circle-event.service';

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
  clubId:string;
  constructor(
    private routerInfo: ActivatedRoute,
    private clubService: ClubService,
    private cleService: ClubEventService
  ) { }
  isVisible = false;
  isConfirmLoading = false;
  newIntro:string = '';
  newName:string = '';

  showModal = () => {
    this.isVisible = true;
  }
  ngOnInit() {
    this.clubId = this.routerInfo.snapshot.params['id'];
    this.loadClubDate(this.clubId);
    this.cleList = this.cleService.getCles();

  }
  addClubPage(){
    let time = new Date();
    let cle= new ClubEvent(3,this.newName,'孙笑川',this.newIntro,time,"http://placehold.it/150x100");
    this.cleList.unshift(cle);
    this.isVisible = false;
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }
  loadClubDate(id) {
    this.clubService.getClubById(id)
      .subscribe(
        f => {
          if (f["status_code"] == 666) {
            console.log(f["community"]);
            this.club = f["community"];
          } else {
          }
        }
      );
  }
}
