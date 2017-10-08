import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { OrderComponent } from './pages/order/order.component';
import { MeComponent } from './pages/me/me.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeDetailComponent } from './pages/home/home-detail/home-detail.component';
import {HomeServiceService} from "./services/home-service.service";
import {ApiService} from "./services/api.service";
import { ItemComponent } from './views/home/item/item.component';


//AppModule管理整个项目的module，在装饰器中需要声明这个module有拥有的全部东西
//一个项目中只能作用一个module


@NgModule({
  //注入的组件
  declarations: [
    AppComponent,
    HomeComponent,
    DiscoverComponent,
    OrderComponent,
    MeComponent,
    ErrorComponent,
    HomeDetailComponent,
    ItemComponent
  ],
  //注入的外部module
  imports: [//把属于AppRoutingModule的所有内容转交给当前module
    BrowserModule,//浏览器模块
    AppRoutingModule,//路由模块//依赖注入
    HttpModule//请求数据的模块
  ],
  //注入服务
  providers: [HomeServiceService, ApiService],
  //声明主入口组件
  bootstrap: [AppComponent]
})
export class AppModule { }


