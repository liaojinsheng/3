import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { OrderComponent } from './pages/order/order.component';
import { MeComponent } from './pages/me/me.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeDetailComponent } from './pages/home/home-detail/home-detail.component';

//AppModule管理整个项目的module，在装饰器中需要声明这个module有拥有的全部东西
//一个项目中只能作用一个module


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiscoverComponent,
    OrderComponent,
    MeComponent,
    ErrorComponent,
    HomeDetailComponent
  ],
  imports: [//把属于AppRoutingModule的所有内容转交给当前module
    BrowserModule,
    AppRoutingModule//依赖注入
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


