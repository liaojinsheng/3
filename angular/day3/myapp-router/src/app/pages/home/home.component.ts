import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private listData: Array<string> = ['item1', 'item2', 'item3', 'item4', 'item5'];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  loginAction(){
    //执行登录，跳转到我的页面
  //  js实现页面跳转
    //获得路由对象
  //  路由对象执行跳转
    this.router.navigate(['/me']);
  }

  liAction(itemName){
    //写完整路径
    // this.router.navigate(['/home/detail/'+itemName]);
    // this.router.navigate(['/home/detail', itemName]);

  }
}
