import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {FormsModule} from "@angular/forms";

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import {UserDetailPage} from "../pages/user-detail/user-detail";
import { TabsPage } from '../pages/tabs/tabs';
import {HelloPage} from "../pages/hello/hello";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {EditUserPage} from "../pages/edit-user/edit-user";




@NgModule({
  //声明项目中所有拥有的组件，指令，管道等
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
      UserDetailPage,
      EditUserPage,
    HelloPage,
    LoginPage,
    RegisterPage,
    TabsPage
  ],
  //需要引入的module
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  //设置项目的根组件
  bootstrap: [IonicApp],
  //页面
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    UserDetailPage,
    EditUserPage,
    HelloPage,
    LoginPage,
    RegisterPage,
    TabsPage
  ],
  //服务
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
