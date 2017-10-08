import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  //接收路由中参数

  title: string = '';

  constructor(private activeRoute: ActivatedRoute) {
    console.log(this.activeRoute);
    this.title = this.activeRoute.snapshot.params.name;
    this.title = this.activeRoute.snapshot.queryParams.name;
  }

  ngOnInit() {
  }

}
