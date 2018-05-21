import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../model/user-model';
import  'rxjs/add/operator/map';
import {LoginService} from '../../share-di/login.service';
@Injectable()
export class UserLoginService {
    public subject: Subject<User> = new Subject<User>();
    public rest;
    public name: any;
    public password: any;
    public errorMessage: any;
    constructor(public http: Http,
                private loginService :LoginService){}

    public get currentUser(): Observable<User>{
        return this.subject.asObservable();
    }
  public login(user: User) {
    this.rest.login(this.name, this.password)
      .subscribe(
        f => {
          console.log(f);
          if (f['status_code'] === 666) {
            //处理登陆成功的页面跳转
            //也可以存储接口返回的token
            localStorage.set('token', f['access_token']);
            // this.storage.get('token').then((val)=>{
            //   console.log(val);
            // });
          } else {
            console.log(f['status_code']);
          }
        },
        error => this.errorMessage = < any > error);
  }

   /* public login(user: User){
        return this.http
                .get(this.userLoginURL)
                .map((response: Response)=>{
                    let user = response.json();
                    console.log("user object>"+user);
                    if(user && user.token){
                        localStorage.setItem("currentUser",JSON.stringify(user));
                        this.subject.next(Object.assign({},user));
                    }
                    return response;
                }).subscribe(
                    data=>{
                        console.log("login success>"+data);
                    },
                    error=>{
                        console.error(error);
                    }
                );
    }
*/
    public logout(): void{
        localStorage.removeItem("currentUser");
        this.subject.next(Object.assign({}));
    }
}
