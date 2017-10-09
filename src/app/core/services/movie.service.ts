import  {Injectable} from  '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {PosterMovie} from "../../shared/poster.models";

@Injectable()
export class MovieService {

  items: PosterMovie[];

  constructor(private  http: Http) {
  }

  getItems(): Observable<PosterMovie[]> {
    return this.http.get('app/items')
      .map(response => response.json().data);
  }

  likeMovie(item: PosterMovie): Observable<Response> {
    return this.http.post('app/items', item)
      .map(response => response);
  }

  getItem(id: string): Observable<PosterMovie> {
    return this.http.get(`app/items/${id}`)
      .map(response => response.json().data);
  }

}

