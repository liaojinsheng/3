import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {HomeServiceService, InterMovie} from "../../../services/home-service.service";

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  //接收路由中参数

  title: string = '';
  canLeave: boolean = false;

  data: InterMovie;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private homeService: HomeServiceService) {
    console.log(this.activeRoute);
  }

  ngOnInit() {
    console.log('ngOnInit');


    //获得上个item的所有内容
    console.log('从服务中读取');
    console.log(this.homeService.topMovieData);
    //读取对应的item
    console.log(this.activeRoute.snapshot.params.i);
    const i = this.activeRoute.snapshot.params.i;
    this.data = this.homeService.topMovieData[i];



  }

  backAction(){
    console.log(this.router)
    this.canLeave = true;

    this.router.navigateByUrl('/home');
  }

}
