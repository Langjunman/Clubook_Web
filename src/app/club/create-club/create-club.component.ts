import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.scss']
})
export class CreateClubComponent implements OnInit {

  isVisible = false;
  isConfirmLoading = false;

  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
