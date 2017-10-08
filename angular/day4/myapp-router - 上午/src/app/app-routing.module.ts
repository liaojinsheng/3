import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DiscoverComponent} from "./pages/discover/discover.component";
import {OrderComponent} from "./pages/order/order.component";
import {MeComponent} from "./pages/me/me.component";
import {ErrorComponent} from "./pages/error/error.component";
import {HomeDetailComponent} from "./pages/home/home-detail/home-detail.component";

import {Login} from './routerFun/Login'
import {Leave} from "./routerFun/Leave";

//路由配置文件

//路由的配置对象
const routes: Routes = [
  //  一个路由配置项
  {
    path: 'home',//地址栏的路径
    component: HomeComponent,//组件
    children:[
      {
        path: 'detail/:name',
        component: HomeDetailComponent,
        canDeactivate: [Leave]
      }
    ]
  },
  {
    path: 'discover',
    component: DiscoverComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'me',
    component: MeComponent,
    canActivate: [Login]//配置me页面路由守卫，是一个数组，守卫可以多个，当所有的守卫return都是true，才可以进入页面

  },
    //路由重定向
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
    //匹配没有定义的路由,并需要放在路由表的最后一项。
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Login, Leave]
})
export class AppRoutingModule { }
