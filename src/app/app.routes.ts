import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DiscoverComponent } from './discover/discover.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { CircleComponent } from './circle/circle.component';
import {ClubComponent} from './club/club.component';
import { HomeComponent } from './home/home.component';
import {UserInformationComponent} from './user/user-information/user-information.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {CircleDetailComponent} from './circle/circle-detail/circle-detail.component';
import {ClubDetailComponent} from './club/club-detail/club-detail.component';
import {CircleEventComponent} from './circle/circle-event/circle-event.component';
import {ClubEventComponent} from './club/club-event/club-event.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: "discover",
        component: DiscoverComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'register',
        component: UserRegisterComponent
    },
    {
        path: 'circle',
        component: CircleComponent
    },
    {
        path: 'circled/:circleId',
        component: CircleDetailComponent
    },
    {
        path: 'circle/circleEvent/:id',
        component: CircleEventComponent
    },
    {
        path: 'clubd/:clubId',
        component: ClubDetailComponent
    },
    {
      path: 'club/clubEvent/:id',
      component: ClubEventComponent
    },
    {
        path: 'club',
        component: ClubComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'userinformation',
        component: UserInformationComponent
    },
    {
        path: 'information',
        component: UserProfileComponent
    }
    // {
    //     path: '**',//fallback router must in the last
    //     loadChildren: './home/home.module#HomeModule'
    // }
];
