import { Injectable } from '@angular/core';
import { Movies } from '../models/movies';
import { BehaviorSubject } from 'rxjs';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites = new BehaviorSubject<Movies[]>(this.getFavorites);
  constructor() { }


  get getFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    return favorites !== null ? favorites : [];
  }

  set setFavorites(values: Movies[]){
    values.forEach(value => {
      console.log(value.poster);
      value.poster = value.poster;
    })
    const str = JSON.stringify(values);
    localStorage.setItem('favorites', str);
  }
}

