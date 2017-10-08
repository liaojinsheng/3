import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-view',
  templateUrl: './my-view.component.html',
  styleUrls: ['./my-view.component.css']
})
export class MyViewComponent implements OnInit {

  @Input()
  private data: Array<string> = [];

  title: string = '千峰教育';

  selected: number = -1;


  constructor() { }

  ngOnInit() {
  }

  btnAction(){
    this.title = 'hello angular';
  }

  liAction(i){
    console.log(i);
    this.selected = i;
  }

}
