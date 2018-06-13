import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  headface: string = "http://img1.touxiang.cn/uploads/20121212/12-055808_368.jpg";

  constructor() { }

  ngOnInit() {
  }

}
