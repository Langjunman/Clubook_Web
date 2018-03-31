import {Component, Input, OnInit} from '@angular/core';
import {Clubs} from '../model/club-model';

@Component({
  selector: 'club-card',
  templateUrl: './club-card.component.html',
  styleUrls: ['./club-card.component.scss']
})
export class ClubCardComponent implements OnInit {

  @Input() clubs: Clubs;
  constructor() { }

  ngOnInit() {
  }

}
