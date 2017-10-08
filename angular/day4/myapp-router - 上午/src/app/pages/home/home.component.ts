import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private listData: Array<string> = ['item1', 'item2', 'item3', 'item4', 'item5'];

  private movieData: Array<any> = [];

  constructor(public router: Router, private http: Http) { }

  ngOnInit() {

    const urlPath = '/v2/movie/top250';

    //  发送请求
    this.http.get(urlPath)
        //接收到了响应
        .map((response)=>{
          console.log(response);
          return response.json();//开始接收数据
        })
        .subscribe((data)=>{//监听数据接收完成
          console.log(data);//data接收请求的数据结果
          this.movieData = data.subjects;
        });

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
    this.router.navigate(['/home/detail', itemName]);

  }
}
