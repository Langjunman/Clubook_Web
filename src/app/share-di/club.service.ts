
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class ClubService {
  private apiGetClubList='http://clubook.club/api/community';
  private apiGetClub ='http://clubook.club/api/community/';
  private apiUrlCreateClub = 'http://clubook.club/api/community/create';
  private apiUrlCircleClub = 'http://clubook.club/api/circle/create';
 private apiUrlWriteArticle ="http://clubook.club/api/article";
  private apiGetClubJoin ="http://clubook.club/api/community/join/";

  private clubList:Clubs[] = [
    new Clubs(1, "书法社", 6324,'',"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528639394378&di=ed03a148e13ba3ce81a88c9094669007&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170804%2F61b5b50a9853472996b5364cf9c21c84_th.jpg"),
    new Clubs(2, "吉他社", 232,'',"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2455863602,2627199007&fm=27&gp=0.jpg"),
    new Clubs(3, "音乐社", 1,'',"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528639184444&di=b3e3da47096f1038a873fc6a999668ca&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2F320_180%2Fu_user%2Ff8cfddc871532a4d4be2275448f30461.jpg"),
    new Clubs(4, "街舞社", 2222,'',"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528639466078&di=f18344b198184d8d7590782e3e11f5ad&imgtype=0&src=http%3A%2F%2Fpic1.16pic.com%2F00%2F53%2F11%2F16pic_5311770_b.jpg"),
    new Clubs(5, "健美社", 24,'',"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528639493578&di=8a7e47606155e1ec5f65aefb5b06a522&imgtype=0&src=http%3A%2F%2Fwww.czzj.com%2Fupload%2Fnews%2F20160608%2F1516504171.jpg"),
    new Clubs(6, "电竞社", 324,'',"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529234152&di=1454f1880caf3b0069e7e0ecba2876d0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.guangshaxy.com%2FUploadFiles%2FXYWH%2F2018%2F1%2F2018123112158.jpg")
  ];
  constructor(public http: Http) { }
  getClubs(){
    return this.clubList;
  }

  getClub(id:number):Clubs{
    return this.clubList.find((Clubs) => Clubs.clubId == id);
  }


  getClubList(): Observable<string[]>{
    return this.getUrlReturn(this.apiGetClubList);
  }

  getClubById(id): Observable<string[]>{
    return this.getUrlReturn(this.apiGetClub+id);
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
  createClub(token, name, brief): Observable<string[]>{
    let headers = new Headers({
      Authorization: "Bearer " + token
    });
    return this.postUrlReturn(this.apiUrlCreateClub, {
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
  joinClub(token,id){
    let headers = new Headers({
      Authorization: "Bearer " + token
    });
    return this.getUrlReturn(this.apiGetClubJoin+id,headers);
  }
}
export class Clubs{
  constructor(
    public clubId: number,
    public clubName: string,
    public clubMembers: number,
    public clubIntro:string,
    public clubAvatar:string
  ){

  }
}
