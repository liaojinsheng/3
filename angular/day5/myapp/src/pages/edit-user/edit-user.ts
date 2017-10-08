import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {

  title: string = '';
  userInfo: any = {
    birthDay: '',
    tel: '',
    email: '',
    words: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
    this.title = this.navParams.get('username');
    //取出原来用户数据，再进行编辑
    let userStr = localStorage.getItem(this.title);
    if(userStr != null){
      this.userInfo = JSON.parse(userStr);
    }
  }

  saveAction(tel, email, words){
    console.log('保存');
    //根据用户保存
    console.log(this.userInfo);
    let userInfo = this.userInfo;
    localStorage.setItem(this.title, JSON.stringify(userInfo));

    //返回上一页
    this.navCtrl.pop();

  }

}
