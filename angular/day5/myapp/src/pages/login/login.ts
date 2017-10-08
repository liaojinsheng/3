import { Component } from '@angular/core';
import {NavController, ViewController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginAction(userVal, psdVal){
    console.log('用户名',userVal);
    console.log('密码',psdVal);

    if(userVal === '' || psdVal === ''){
      this.alertMessage('不能为空');
      return;
    }

    //将用户数据取出
    let userList = localStorage.getItem('userList');
    if(userList == null){
      this.alertMessage('请先注册');
      return;
    }

    let data: Array<any> = JSON.parse(userList);
    let userIndex: number = -1;
    data.map((item, index)=>{
      if(item.username === userVal){
        userIndex = index;
        if(item.password === psdVal){
          //登录成功
          sessionStorage.setItem('isLogin', 'true');
          this.viewCtrl.dismiss();
        }else{
          //登录失败，密码错误
          this.alertMessage('用户或密码错误');
        }
      }
    })
    if(userIndex === -1){
      //登录失败，用户名错误
      this.alertMessage('用户或密码错误');
    }

  }

  cancelAction(){
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
