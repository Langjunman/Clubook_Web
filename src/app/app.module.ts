import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DiscoverComponent } from './discover/discover.component';
import { appRoutes } from './app.routes';

import { MasonryModule } from 'angular2-masonry';

import { UserLoginService } from './user/user-login/user-login.service';
import { UserRegisterService } from './user/user-register/user-register.service';

import { EqualValidator } from './user/user-register/directives/equal-validator.directive';

import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import {ClubComponent} from './club/club.component';
import { CircleComponent } from './circle/circle.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { WritePassageComponent } from './home/write-passage/write-passage.component';
import { PassageCardComponent } from './home/passage-card/passage-card.component';
import { CircleCardComponent } from './discover/circle-card/circle-card.component';
import { CircleListComponent } from './discover/circle-list/circle-list.component';
import { CreatCircleComponent } from './circle/creat-circle/creat-circle.component';
import { CreateClubComponent } from './club/club/create-club.component';
import { CommentComponent } from './comment/comment.component';
import { ClubCardComponent } from './club/club-card/club-card.component';
import {UserInformationComponent} from './user/user-information/user-information.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {FormControlComponent} from './user/user-profile/dynamic-form/form-control.component';


@NgModule({
  declarations: [
    AppComponent,
    EqualValidator,
    DiscoverComponent,
    UserLoginComponent,
    UserRegisterComponent,
    CircleComponent,
    HomeComponent,
    NotificationsComponent,
    WritePassageComponent,
    PassageCardComponent,
    CircleCardComponent,
    CircleListComponent,
    CreatCircleComponent,
    CommentComponent,
    ClubComponent,
    CreateClubComponent,
    ClubCardComponent,
    UserInformationComponent,
    UserProfileComponent,
    FormControlComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MasonryModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    UserLoginService,
    UserRegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
