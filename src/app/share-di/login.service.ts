import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from '../user/model/user-model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoginService {

  constructor(public http: Http) {
  }
  public userLoginURL = 'mock-data/user-login-mock.json';

  //post
  private apiUrlLogin = 'http://clubook.club/api/user/auth';
  private apiUrlRegister = 'http://clubook.club/api/user/register';
  private apiUrlGetInfo = 'http://clubook.club/api/user/getinfo';
  private apiUrlUpdateNickName = 'http://clubook.club/api/user/change_nickname';
  public subject: Subject<User> = new Subject<User>();
  public get currentUser():Observable<User>{
    return this.subject.asObservable();
  }
  /**
   * 根据用户id获取用户信息
   *
   * @param {any} nickname
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   *
   */
  getUserInfo(token): Observable < string[] > {
    let headers = new Headers({
      Authorization: "Bearer " + token
    });
    return this.getUrlReturn(this.apiUrlGetInfo, headers);
  }

  updateNickName(nickname,token): Observable < string[] > {
    let headers = new Headers({
      Authorization: "Bearer " + token
    });
    return this.postUrlReturn(this.apiUrlUpdateNickName, {
      "nickname": nickname
    },headers);
  }
  /**
   * 根据用户名，密码，邮箱进行注册
   *
   * @param {any} name
   * @param {any} password
   * @param {any} email
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  register(name, password, email, nickname): Observable < string[] > {
    return this.postUrlReturn(this.apiUrlRegister, {
      "name": name,
      "password": password,
      "email": email,
      "nickname": nickname
    });
  }

  /**
   * 根据用户的邮箱和密码进行登陆
   *
   * @param {any} name
   * @param {any} password
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  login(name, password): Observable < string[] > {
    return this.postUrlReturn(this.apiUrlLogin, {
      "name": name,
      "password": password
    });
  }

  public dologin(user:User){
    return this.http
      .get(this.userLoginURL)
      .map((response: Response) => {
        let user = response.json();
        console.log("user object>"+user);
        if(user && user.token){
          localStorage.setItem("currentUser",JSON.stringify(user));
          this.subject.next(Object.assign({},user));
        }
        return response;
      })
      .subscribe(
        data => {
          console.log("login success>"+data);
        },
        error => {
          console.error(error);
        }
      );
  }
  public dologout():void{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userinfo');
    localStorage.removeItem('userval');
    this.subject.next(Object.assign({}));
  }
  /**
   * 全局POST获取HTTP请求的方法
   *
   * @private
   * @param {string} url
   * @param {*} body
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  private postUrlReturn(url: string, body: any,headers?:Headers): Observable < string[] > {
    let opitins = new RequestOptions({
      headers: headers
    });
    return this.http.post(url, body, opitins)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * 全局GET获取 HTTP 请求的方法
   * @fivelike
   * @private
   * @param {string} url
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  private getUrlReturn(url: string, headers?:Headers ): Observable < string[] > {
    let opitins = new RequestOptions({
      headers: headers
    });
    return this.http.get(url, opitins)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * 处理接口返回的数据，处理成Json格式
   *
   * @private
   * @param {Response} res
   * @returns
   * @memberof RestProvider
   */
  private extractData(res: Response) {
    let body = res.json();
    //return JSON.parse(body) || {};
    return body;
  }

  /**
   * 处理请求中的错误，考虑了各种情况的错误处理并在console中显示error
   *
   * @private
   * @param {(Response | any)} error
   * @returns
   * @memberof RestProvider
   */
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
