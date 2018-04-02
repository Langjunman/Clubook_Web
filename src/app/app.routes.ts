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

export const appRoutes = [
    {
        path: '',
        redirectTo: 'discover',
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
        path: 'club',
        component: ClubComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'userinformation',
        component:UserInformationComponent
    },
    {
        path: 'profile',
        component: UserProfileComponent
    }
    // {
    //     path: '**',//fallback router must in the last
    //     loadChildren: './home/home.module#HomeModule'
    // }
];
