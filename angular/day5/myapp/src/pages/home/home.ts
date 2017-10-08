import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserDetailPage} from "../user-detail/user-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userData: Array<any> = [];

  constructor(public navCtrl: NavController) {
    //构造函数
    console.log('view init');
  }

  ionViewDidLoad(){
    //页面将要显示时
    console.log('view did load');
  }


  ionViewWillEnter(){
    console.log('ViewWillEnter 将要进入');
    //将用户数据取出进行展示
    let userList = localStorage.getItem("userList");
    if(userList != null){
      this.userData = JSON.parse(userList);
    }
  }
  ionViewDidEnter(){
    console.log('ViewDidEnter 已经进入');
  }
  ionViewWillLeave(){
    console.log('ViewWillLeave 将要离开');

  }
  ionViewDidLeave(){
    console.log('ViewDidLeave 已经离开');

  }
  ionViewWillUnload(){
    console.log('ViewWillUnload 将要销毁');

  }
  ionViewCanEnter(){
    console.log('是否可以进入');
    return true;
  }
  ionViewCanLeave(){
    console.log('是否可以离开');
    return true;
  }


  toDetail(item){
    console.log(item);
    this.navCtrl.push(UserDetailPage, {
      username: item.username
    });


  }


}
