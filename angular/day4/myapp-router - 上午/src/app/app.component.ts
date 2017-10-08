import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabsData: Array<InterTabs> = [
    {
      title: '外卖',
      path: '/home'
    },
    {
      title: '发现',
      path: '/discover'
    },
    {
      title: '订单',
      path: '/order'
    },
    {
      title: '我的',
      path: '/me'
    }
  ];

}

export interface InterTabs{
  title: string,
  path: string
}