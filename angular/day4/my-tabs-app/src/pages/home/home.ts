import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  public num: number = 10;

  constructor(public navCtrl: NavController, public actionsheetCtrl: ActionSheetController, public alertCtrl: AlertController) {


  }

  showActionsheet(){
    //创建弹出框
    let actionSheet = this.actionsheetCtrl.create({
      // 标题
      title: '分享至',
      //按钮
        buttons: [
      {
        text: 'Destructive',
        role: 'destructive',//销毁按钮样式
        handler: () => {//按钮点击时的事件
          console.log('Destructive clicked');
        }
      },{
        text: 'QQ',
        handler: () => {
          console.log('QQ clicked');
        }
      },
      {
        text: '微信',
        handler: () => {
          console.log('微信 clicked');
        }
      },
      {
        text: '新浪微博',
        handler: () => {
          console.log('新浪微博 clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',// 取消按钮
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });

  //  展示
    actionSheet.present();
  }

  showAlert(){
    //普通弹框
    // let alert = this.alertCtrl.create({
    //   title: '网络错误',
    //   subTitle: '请检测网络设置',
    //   buttons: ['OK']
    // });

    //带有文本输入框的弹框
    let prompt = this.alertCtrl.create({
      title: '登录',
      inputs: [
        {
          name: 'username',
          placeholder: 'username'
        },
        {
          name: 'password',
          placeholder: 'password',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log(data);
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);
            console.log('Saved clicked');
          }
        }
      ]
    });

    prompt.present();
  }

  btnAction(){
    console.log('按钮点击了');
  }

  tapEvent(ev){
    console.log(ev);
    this.num = this.num+1;
  }

}
