import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloPage');
  }

  loginAction(){
    //  创建模态页面
    let modal = this.modalCtrl.create(LoginPage);
  //  显示页面
    modal.present();
  }

  registerAction(){
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();

  }



}
