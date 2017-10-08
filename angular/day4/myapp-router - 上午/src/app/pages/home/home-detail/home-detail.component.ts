import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  //接收路由中参数

  title: string = '';
  canLeave: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    console.log(this.activeRoute);
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.title = this.activeRoute.snapshot.params.name;

    //监听参数的变化
    this.activeRoute.params.subscribe((params: Params)=>{
      console.log('发生了变化');
      console.log(params)
    })


  }

  backAction(){
    console.log(this.router)
    this.canLeave = true;

    this.router.navigateByUrl('/home');
  }

}
