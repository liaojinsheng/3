import { Component } from '@angular/core';
import {NavController, ViewController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  ionViewWillUnload(){
    console.log('ViewWillUnload 将要销毁');
  }

  //取消事件
  cancelAction(){
    this.viewCtrl.dismiss();
  }

  //注册事件
  registerAction(userVal, psdVal, confirmPsdVal){
    //判断是否为空
    if(userVal === '' || psdVal === '' || confirmPsdVal === ''){
      console.log('不能为空');
      this.alertMessage('不能为空');
      return;
    }
    //判断密码是否相等
    if(psdVal !== confirmPsdVal){
      console.log('两次密码不一致');
      this.alertMessage('两次密码不一致');
      return;
    }


    //注册成功
    console.log('注册成功');
    //将数据保存
    //1.先将原来保存的数据取出
    let userList = localStorage.getItem('userList');
    let data: Array<any>;
    if(userList == null){
      data = [];
    }else{
      data = JSON.parse(userList);
    }

    //2.将当前注册数据保存起来
    data.push({
      username: userVal,
      password: psdVal
    });
    userList = JSON.stringify(data);
    localStorage.setItem('userList', userList);



    this.viewCtrl.dismiss();

  }


  alertMessage(info){

    let alert = this.alertCtrl.create({
      title: '提示',
      subTitle: info,
      buttons: ['确定']
    });
    alert.present();

  }




}
