import { Component, OnInit, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import {HomeServiceService, InterMovie} from "../../services/home-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private movieData: Array<InterMovie> = [];

  private deleteHandle: EventEmitter<any>;

  constructor(public router: Router, private homeService: HomeServiceService) { }

  ngOnInit() {
    this.homeService.getTopMovie()
        .then((data: Array<InterMovie>)=>{//primise处理成功的回调
          console.log('home组件接收到了数据');
          console.log(data);
          this.movieData = data;
        })

      this.deleteHandle = new EventEmitter<any>();
    //注册监听事件
        this.deleteHandle.subscribe(({index})=>{
            console.log('父级触发了');
            //执行删除
            this.movieData.splice(index, 1);
        })

  }

  loginAction(){
    //执行登录，跳转到我的页面
  //  js实现页面跳转
    //获得路由对象
  //  路由对象执行跳转
    this.router.navigate(['/me']);
  }

  liAction(index){
    //写完整路径
    this.router.navigate(['/home/detail', index]);

  }




}
