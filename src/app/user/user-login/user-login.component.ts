import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from './user-login.service';
import { Observable } from 'rxjs/Observable';
import {LoginService} from '../../share-di/login.service';
import { User } from '../model/user-model';
@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public currentUser: User = new User();
  public error: Error;
  public rest;
  public name: any;
  public password: any;
  public errorMessage: any;

  constructor(
    public router: Router,
    public loginService: LoginService
  ) {  }

  ngOnInit() {

  }


  public login() {
    this.loginService.login(this.currentUser.userName, this.currentUser.password)
      .subscribe(
        f => {
          console.log(f);
          if (f['status_code'] === 666) {
            //处理登陆成功的页面跳转
            //也可以存储接口返回的token
            localStorage.setItem('token', f['access_token']);
            // this.storage.get('token').then((val)=>{
            //   console.log(val);
            // });
            this.router.navigateByUrl("/home");

          } else {
            console.log(f['status_code']);
          }
        },
        error => this.errorMessage = < any > error);
    this.loginService.dologin(this.currentUser);
  }



  public Logout():void{
    this.loginService.dologout();
    this.router.navigateByUrl("home");
  }
}
