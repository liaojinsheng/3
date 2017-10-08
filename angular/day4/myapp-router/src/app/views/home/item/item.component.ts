import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {InterMovie} from "../../../services/home-service.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  data: InterMovie;
  @Input()
  index: number;

  //可以向父级发送消息的对象
  @Input()
  public handle:EventEmitter<any>;

  constructor() { }

  ngOnInit() {
  }

  deleteAction(){

    console.log('将下标告诉父级'+this.index);
    console.log(this.handle)
    //触发父级事件
    this.handle.emit({
      title: this.data.title,
      index: this.index
    });

  }

}
