import { Component, OnInit } from '@angular/core';
import {Circles} from '../discover/model/circle-model';

@Component({
  selector: 'circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  circleList: Circles[];

  constructor() {
    this.circleList = [
      new Circles(1, "失物招领", 2324,"http://placehold.it/820x230",''),
      new Circles(1, "失物招领", 2324,"http://placehold.it/820x230",''),
      new Circles(1, "失物招领", 2324,"http://placehold.it/820x230",''),
      new Circles(1, "失物招领", 2324,"http://placehold.it/820x230",''),
      new Circles(1, "失物招领", 2324,"http://placehold.it/820x230",''),
      new Circles(2, "拼车", 2324,"http://placehold.it/820x230",'')
    ];
  }
  isVisible = false;
  isConfirmLoading = false;
  newIntro:string = '';
  newName:string = '';

  showModal = () => {
    this.isVisible = true;
  }

  /* handleOk = (e) =>{
 this.isConfirmLoading = true;
   setTimeout(() => {
     this.isVisible = false;
     this.isConfirmLoading = false;
   }, 3000);

 }*/
  addCircle(){
    let circle = new Circles(3,this.newName,1,"",this.newIntro);
    this.circleList.unshift(circle);
    this.isVisible = false;
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }

  ngOnInit() {

  }

}
