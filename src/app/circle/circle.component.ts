import {Component, Input, OnInit} from '@angular/core';
import {Circles, CircleService} from '../share-di/circle.service';


@Component({
  selector: 'circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  @Input ()
  circleList: Circles[];
  @Input()
  circles: Circles;
  constructor(private circleService: CircleService) {

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
    this.circleList = this.circleService.getCircles();
  }

}
