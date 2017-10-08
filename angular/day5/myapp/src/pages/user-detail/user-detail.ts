import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EditUserPage} from "../edit-user/edit-user";

@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {

  title: string = '';
  userInfo: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');

    this.title = this.navParams.get('username');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter UserDetailPage');
    let userStr = localStorage.getItem(this.title);
    if(userStr != null){
      this.userInfo = JSON.parse(userStr);
    }
  }

  editAction(){
    this.navCtrl.push(EditUserPage, {
      username: this.title
    });
  }
}
