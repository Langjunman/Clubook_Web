import {Circles} from '../../discover/model/circle-model';
import {Clubs} from '../../club/model/club-model';

export class User {
  constructor(
   public id: number,
  public avatar: string,
  public userName: string,
  public nickName: string,
  public password: string,
  public email: string,
  public confirmPassword: string,
  public joinedcircles:Circles[],
  public joinedclubs:Clubs[]
  ){}
}
