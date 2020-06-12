import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.scss']
})
export class FavButtonComponent implements OnInit {
  @Input() btnSize: string;
  @Input() element: Movies;

  favList: Movies[];
  isFav = false as boolean;

  // icons
  faHeart = faHeart;
  farHeart = farHeart;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.getter();
    this.checkFavorite();
  }

  getter(){
    this.favList = this.favoritesService.getFavorites;
  }

  checkFavorite() {
    let found: Movies;
    if (this.favList) {
      found = this.favList.find((favorite: Movies) => {
        return favorite.title === this.element.title;
      });
    }
    return found ? this.isFav = true : this.isFav = false;
  }

  makeFavorite() {
    this.favList = this.favoritesService.getFavorites;
    if (this.isFav) {
      this.favList = this.favList.filter((favorite: Movies) => favorite.title !== this.element.title
      );
    }else{
      this.favList = [...this.favList, this.element];
    }

    this.favoritesService.setFavorites = this.favList;
    this.checkFavorite();
  }
}
