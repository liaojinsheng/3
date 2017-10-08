import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  public api = {
    top250MovieApi: '/v2/movie/top250',
    playingMovieApi: '/v2/movie/in_theaters',
    comingSoonMovieApi: '/v2/movie/coming_soon'
  }

  constructor() { }

}
