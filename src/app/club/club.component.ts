import {Component, Input, OnInit} from '@angular/core';
import {Clubs, ClubService} from '../share-di/club.service';
import {CircleService} from '../share-di/circle.service';


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
  public recommendFeeds: Array<any> = [];
  public memberFeeds: Array<any> = [];
  public myFeeds: Array<any> = [];
  public errorMessage: any;
  public val:string;
  clubswitch: string = 'recommend';

  constructor(  private clubService: ClubService,
                private circleService: CircleService) {

  }
  public cname: string;
  public cbrief: string;

  isVisible = false;
  isConfirmLoading = false;

  switchToRec(){
    this.clubswitch= 'recommend';
  }
  switchToMem(){
    this.clubswitch = 'member';
  }
  switchToYours(){
    this.clubswitch = 'yours';
  }
  showModal = () => {
    this.isVisible = true;
  }
  createC(){
    this.val = localStorage.getItem('token');
    if (this.val != null) {
      // var loading = super.showLoading(this.loadingCtrl, "创建中...");
      this.clubService.createClub(this.val, this.cname, this.cbrief).subscribe(
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
  createClub() {
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


  handleCancel = (e) => {
    this.isVisible = false;
  }


  ngOnInit() {
    this.getFeeds();

  }
  getFeeds(){
    this.clubService.getClubList().subscribe(
      f => {
        if (f["status_code"] == 666) {
          console.log(f);
          this.recommendFeeds = f["communities"];
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
            this.separateFeeds(f["communities"]);
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
  separateFeeds(Feeds: any) {
    for (let f of Feeds) {
      if (f.my_role == "creator") {
        this.myFeeds.push(f);
      } else {
        this.memberFeeds.push(f);
      }
    }
  }
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
      this.clubService.joinClub(this.val, id).subscribe(
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
}
