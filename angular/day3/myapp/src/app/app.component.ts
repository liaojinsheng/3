import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  arr: Array<string> = [];

  constructor(){
    for(var i = 0; i < 10; i++){
      this.arr.push('item'+i);
    }

  }

}
