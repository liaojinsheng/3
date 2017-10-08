import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DiscoverComponent} from "./pages/discover/discover.component";
import {OrderComponent} from "./pages/order/order.component";
import {MeComponent} from "./pages/me/me.component";
import {ErrorComponent} from "./pages/error/error.component";
import {HomeDetailComponent} from "./pages/home/home-detail/home-detail.component";

//路由配置文件

//路由的配置对象
const routes: Routes = [
  //  一个路由配置项
  {
    path: 'home',//地址栏的路径
    component: HomeComponent,//组件
    children:[
      {
        // path: 'detail/:name',
        path: 'detail',
        component: HomeDetailComponent
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
    component: MeComponent
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
