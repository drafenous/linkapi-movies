import { Injectable } from '@angular/core';
import { Movies } from '../models/movies';
import { BehaviorSubject } from 'rxjs';

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
      value.poster = value.poster;
    })
    const str = JSON.stringify(values);
    localStorage.setItem('favorites', str);
  }
}

