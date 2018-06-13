import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CircleService {
  private apiGetCircleList ="http://clubook.club/api/circle";
  private apiGetCircle = "http://clubook.club/api/circle/";
  private apiGetMyGroups ="http://clubook.club/api/user/mygroups";
  private apiGetClubJoin ="http://clubook.club/api/community/join/";
  private apiGetCircleJoin = "http://clubook.club/api/circle/join/";
  private apiUrlCircleClub = 'http://clubook.club/api/circle/create';

  private circleList:Circles[]= [
    new Circles(1, "失物招领", 2324,"http://placehold.it/150x100",''),
    new Circles(2, "失物招领", 2324,"http://placehold.it/150x100",''),
    new Circles(3, "失物招领", 2324,"http://placehold.it/150x100",''),
    new Circles(4, "失物招领", 2324,"http://placehold.it/150x100",''),
    new Circles(5, "失物招领", 2324,"http://placehold.it/150x100",''),
    new Circles(6, "拼车", 2324,"http://placehold.it/150x100",'')
  ];
  constructor(public http: Http) { }

  getCircles(){
    return this.circleList;
  }

  getCircle(id:number): Circles{
    return this.circleList.find((Circles) => Circles.circleId == id);
  }
  getCircleList(): Observable<string[]> {
        return this.getUrlReturn(this.apiGetCircleList);
      }

  getCircleById(id): Observable<string[]> {
        return this.getUrlReturn(this.apiGetCircle + id);
      }
  private getUrlReturn(url: string, headers?:Headers ): Observable < string[] > {
    let opitins = new RequestOptions({
      headers: headers
    });
    return this.http.get(url, opitins)
      .map(this.extractData)
      .catch(this.handleError);
  }
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
  getMyGroups(token){
        let headers = new Headers({
            Authorization: "Bearer " + token
        });
        return this.getUrlReturn(this.apiGetMyGroups,headers);
      }


  joinCircle(token, id) {
    let headers = new Headers({
      Authorization: "Bearer " + token
    });
    return this.getUrlReturn(this.apiGetCircleJoin + id,headers);
  }
  createCircle(token, name, brief): Observable<string[]> {
    let headers = new Headers({
      Authorization: "Bearer " + token
    });
    return this.postUrlReturn(this.apiUrlCircleClub, {
      "name": name,
      "brief": brief
    }, headers);
  }
  private postUrlReturn(url: string, body: any,headers?:Headers): Observable < string[] > {
    let opitins = new RequestOptions({
      headers: headers
    });
    return this.http.post(url, body, opitins)
      .map(this.extractData)
      .catch(this.handleError);
  }
}

export class Circles {

  constructor(
    public circleId: number,
    public circleName: string,
    public circleMembers: number,
    // public circleCreater: string,
    public circleAvatar: string,
    public  circleIntro: string
  ) { }
}
