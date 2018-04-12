import {Component, Input, OnInit} from '@angular/core';
import {Clubs, ClubService} from '../share-di/club.service';


@Component({
  selector: 'club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  @Input ()
  clubList: Clubs[];
  @Input ()
  clubs: Clubs;
  constructor(  private clubService: ClubService) {

  }


  isVisible = false;
  isConfirmLoading = false;
  newIntro:string = '';
  newName:string = '';

  showModal = () => {
    this.isVisible = true;
  }

  addClub(){
    let club = new Clubs(3,this.newName,1,this.newIntro,"");
    this.clubList.unshift(club);
    this.isVisible = false;
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }


  ngOnInit() {
    this.clubList = this.clubService.getClubs();
  }

}
