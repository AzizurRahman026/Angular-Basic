import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { NavberComponent } from './navber/navber.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'post', component: PostComponent },
    { path: 'post-list', component: PostListComponent },
    { path: 'navber', component: NavberComponent },
    { path: 'login', component: LoginComponent },
];
