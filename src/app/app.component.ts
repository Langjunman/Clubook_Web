import {Component, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserLoginService } from './user/user-login/user-login.service';
import { UserRegisterService } from './user/user-register/user-register.service';
import { User } from './user/model/user-model';
import 'rxjs/add/operator/merge';

import { NzNotificationService } from 'ng-zorro-antd';
import {LoginService} from './share-di/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public headface = "http://img1.touxiang.cn/uploads/20121212/12-055808_368.jpg";
  public userinfo: string[];
  public currentUser: User;
  public errorMessage: any;
  public usersname:string;
  public userval:string;
  public nickname = '加载中...';


  constructor(
    public userLoginService: UserLoginService,
    public userRegisterService: UserRegisterService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private _notification: NzNotificationService,
    public loginService: LoginService
  ){

  }
  ngOnInit(){
    this.userval = localStorage.getItem('token');
    // console.log(this.currentUser);
   /* this.userLoginService.currentUser
      .merge(this.userRegisterService.currentUser)
      .subscribe(
        data=>{
          console.log(data);
          this.currentUser = data;
          let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
          let routerState: RouterState = this.router.routerState;
          let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

          //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
          if (routerStateSnapshot.url.indexOf("/login") != -1) {
            this.router.navigateByUrl("/home");
          }
        },
        error=> console.error(error)
      );*/
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.loginService.currentUser
      .merge(this.userRegisterService.currentUser)
      .subscribe(
        data => {
          this.currentUser = data;},
          error => console.error(error)
      );

        if (this.userval != null) {
          //加载用户数据

          this.loginService.getUserInfo(this.userval)
            .subscribe(userinfo => {
                this.userinfo = userinfo;
                this.usersname = this.userinfo["name"];
                this.nickname = userinfo["nickname"];
                this.headface = userinfo["IconUrl"] + "?" + (new Date()).valueOf(); //加后缀参数防止缓存
                let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
                let routerState: RouterState = this.router.routerState;
                let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

                /*  //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
                  if (routerStateSnapshot.url.indexOf("/login") != -1) {
                    this.router.navigateByUrl("/home");
                  }*/


              },

              error => this.errorMessage = <any>error);
        };
  }

public Logout(): void {
  this.loginService.dologout();

  localStorage.removeItem('currentUser');
   localStorage.removeItem('userval');

  this.createNotification('success','退出成功','欢迎你下次使用');
    this.router.navigateByUrl("");
  }

  createNotification = (type,text,p) => {
    this._notification.create(type, `${text}`, `${p}`);
  };

}
