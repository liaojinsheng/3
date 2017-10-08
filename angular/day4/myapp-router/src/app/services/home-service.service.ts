import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class HomeServiceService {

  public topMovieData: Array<InterMovie> = [];

  constructor(private apiService: ApiService, private http: Http) { }

  getTopMovie(){
    return new Promise((resolve, reject)=>{
      this.http.get(this.apiService.api.top250MovieApi)
          .map((response)=>{
            return response.json();
          })
          .subscribe((result)=>{
            console.log('服务请求top250数据成功');
            console.log(result);
            result.subjects.map((item)=>{
              this.topMovieData.push({
                title: item.title,
                imgPath: item.images.small,
                rating: item.rating.average,
                genres: item.genres
              })
            })
            resolve(this.topMovieData);

          })
    })
  }

}

export interface InterMovie{
  title: string,
  imgPath: string,
  rating: string,
  genres: Array<string>
}
