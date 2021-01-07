import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from '../app/home-page/home-page.component';
import {Login2ndpageComponent} from '../app/login2ndpage/login2ndpage.component';
import {RegisterComponent} from '../app/register/register.component';

const routes: Routes = [
{path:'home',component:HomePageComponent},
{path:'afterlogin',component:Login2ndpageComponent},
{path:'registeruser',component:RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
