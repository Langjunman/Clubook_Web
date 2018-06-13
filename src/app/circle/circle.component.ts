import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Circles, CircleService} from '../share-di/circle.service';
import {BaseUI} from '../../../Clubook_mobile/src/common/baseui';
import {CreatecirclePage} from '../../../Clubook_mobile/src/pages/createcircle/createcircle';
import {CircledetailsPage} from '../../../Clubook_mobile/src/pages/circledetails/circledetails';


@Component({
  selector: 'circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit{
  //@ViewChild(Content) content: Content;
  @Input ()
  circleList: Circles[];
  @Input()
  circles: Circles;
  constructor(private circleService: CircleService) {

  }
  public display: boolean = true;
  public name: string;
  public brief: string;
  public cname: string;
  public cbrief: string;
  circleswitch: string = 'recommend';
  isVisible = false;
  isConfirmLoading = false;
  newIntro:string = '';
  newName:string = '';
  private val:string;
  public recommendFeeds: Array<any> = [];
  public memberFeeds: Array<any> = [];
  public myFeeds: Array<any> = []
  public errorMessage: any;
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
  switchToRec(){
    this.circleswitch = 'recommend';
  }
  switchToMem(){
    this.circleswitch = 'member';
  }
  switchToYours(){
    this.circleswitch = 'yours';
  }
  addCircle(){
    let circle = new Circles(3,this.newName,1,"http://placehold.it/150x100",this.newIntro);
    this.circleList.unshift(circle);
    this.isVisible = false;
  }
  createC(){
    this.val = localStorage.getItem('token');
      if (this.val != null) {
       // var loading = super.showLoading(this.loadingCtrl, "创建中...");
        this.circleService.createCircle(this.val, this.cname, this.cbrief).subscribe(
          f => {
            if (f["status_code"] == "666") {
              console.log("success");

              // loading.dismiss();
             // super.showToast(this.toastCtrl, "创建成功！");
            //  this.dismiss();
            } else {
              console.log( f["message"]);

              //    loading.dismiss();
           //   super.showToast(this.toastCtrl, f["message"]);
            }
          },
          error => {
            this.errorMessage = <any>error;
            if (error.substring(0, 3) == "401") {
              //console.log(1);
              localStorage.removeItem('token');
              console.log("guoqi");

              //      loading.dismiss();
       //       super.showToast(this.toastCtrl, "您的登陆信息已过期，请重新登陆。");
            }
          }
        );
      } else {
        console.log("loginplease");

        //   super.showToast(this.toastCtrl, "请登陆后进行创建...");
      }
  }
  handleCancel = (e) => {
    this.isVisible = false;
  }

  ngOnInit() {
    this.getFeeds();

  }

  separateFeeds(Feeds: any) {
      for (let f of Feeds) {
          if (f.my_role == "creator") {
              this.myFeeds.push(f);
            } else {
              this.memberFeeds.push(f);
            }
        }
    }
  createCircle() {
    this.val = localStorage.getItem('token');
      if (this.val != null) {
        let modal = this.createC();
        //关闭后的回调
       // modal.onDidDismiss(() => {
          this.Refresh();
//        modal.present();
      } else {
       // super.showToast(this.toastCtrl, "请登陆后查看...");
      }
    this.isVisible = false;

  }

 // pushCircleDetails(circleId) {
  //  this.navCtrl.push(CircledetailsPage, { id: circleId });
  //}

  doRefresh(refresher) {
    this.Refresh();
    refresher.complete();
  }

  Refresh() {
    this.recommendFeeds = [];
    this.memberFeeds = [];
    this.myFeeds = [];
    this.getFeeds();
  }

  join(id) {
    this.val = localStorage.getItem('token');
      if (this.val != null) {
        //let loading = super.showLoading(this.loadingCtrl, "加入中...");
        this.circleService.joinCircle(this.val, id).subscribe(
          f => {
            if (f["status_code"] == 666) {
              //loading.dismiss();
              //super.showToast(this.toastCtrl, "加入成功！");
            } else {
              //loading.dismiss();
             // super.showToast(this.toastCtrl, f["message"]);
            }
            this.Refresh();
          },
          err => {
            this.errorMessage = <any>err;
            if (err.substring(0, 3) == "401") {
              localStorage.removeItem('token');
             // loading.dismiss();
            //  super.showToast(this.toastCtrl, "您的登陆信息已过期，请重新登陆。");
            }
          }
        );
      } else {
        //super.showToast(this.toastCtrl, "请登陆后加入...");
      }
  }
  getFeeds(){
    this.circleService.getCircleList().subscribe(
      f => {
        if (f["status_code"] == 666) {
          console.log(f);
          this.recommendFeeds = f["circle"];
        } else {
          //loading.dismiss();
          //        super.showToast(this.toastCtrl, f["message"]);
        }
        //loading.dismiss();
      },
      error => this.errorMessage = <any>error);
    this.val = localStorage.getItem('token');

    if (this.val != null) {
      this.circleService.getMyGroups(this.val).subscribe(
        f => {
          if (f["status_code"] == 666) {
            console.log(f);
            this.separateFeeds(f["circles"]);
          } else {
            //loading.dismiss();
            //  super.showToast(this.toastCtrl, f["message"]);
          }
          //loading.dismiss();
        },
        err => {
          //console.log(err.substring(0,3));
          this.errorMessage = <any>err;
          if (err.substring(0, 3) == "401") {
            //console.log(1);
            localStorage.removeItem('token');
            //loading.dismiss();
            //  super.showToast(this.toastCtrl, "您的登陆信息已过期，请重新登陆。");
          }
        }
      );
    } else {
      //  super.showToast(this.toastCtrl, "请登陆后查看...");
    }



  }


}
