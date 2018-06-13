import {Component, Input, OnInit} from '@angular/core';
import {Circles, CircleService} from '../../share-di/circle.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CircleEvent, CircleEventService} from '../../share-di/circle-event.service';

@Component({
  selector: 'circle-detail',
  templateUrl: './circle-detail.component.html',
  styleUrls: ['./circle-detail.component.scss']
})
export class CircleDetailComponent implements OnInit {
  public circle:any;
 public nmsl:string;
  @Input()
  cie: CircleEvent;
  constructor(
    private routerInfo: ActivatedRoute,
    private circleService: CircleService,
    private cieService: CircleEventService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) { }
  isVisible = false;
  isConfirmLoading = false;
  newIntro:string = '';
  newName:string = ''
  circleId:string;
  private cieList: CircleEvent[]= [
    new CircleEvent(1, "失物招领", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹', new Date(),"http://placehold.it/600x800"),
    new CircleEvent(2, "失物招领", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹',new Date(),"http://placehold.it/600x800"),
    new CircleEvent(3, "失物招领", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹',new Date(),"http://placehold.it/600x800"),
    new CircleEvent(4, "失物招领", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹',new Date(),"http://placehold.it/600x800"),
    new CircleEvent(5, "失物招领", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹',new Date(),"http://placehold.it/600x800"),
    new CircleEvent(6, "拼车", '小明', '这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹这是一个海豹',new Date(),"http://placehold.it/600x800")
  ];

  showModal = () => {
    this.isVisible = true;
  }
  loadCircleDate(id){
    this.circleService.getCircleById(id)
      .subscribe(
        f => {
          if (f["status_code"] == 666) {
            console.log(f);
            this.circle = f["circle"];
            this.nmsl = this.circle.name;
          } else {
            //super.showToast(this.toastCtrl, f["message"]);
          }
        }
      );
  }
  ngOnInit() {
    this.circleId = this.routerInfo.snapshot.params['circleId'];
   // this.circle = this.circleService.getCircle(circleId);
    //this.cieList = this.cieService.getCies();
    this.loadCircleDate(this.circleId);
  }
  addCirclePage(){
    let time = new Date();
    let cie= new CircleEvent(3,this.newName,'孙笑川',this.newIntro,time,"http://placehold.it/150x100");
    this.cieList.unshift(cie);
    this.isVisible = false;
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }


}
