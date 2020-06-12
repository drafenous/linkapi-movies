import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Movies } from '../models/movies';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movie = {} as Movies;
  movies: Movies[];
  searchTerm: string;
  foundMovies: Movies[];
  listOnlyFavorites = false as boolean;

  constructor(private api: ApiService, private sanitizer: DomSanitizer, private router: Router, private favorites: FavoritesService) { }

  ngOnInit(): void {
    const activeRoute = this.router.url;
    if (activeRoute === '/favorites') {
      this.listOnlyFavorites = true;
    }

    this.getMovies();
  }

  getMovies() {
    if (!this.listOnlyFavorites) {
      return this.api.getData().subscribe((movies: Movies[]) => {
        this.movies = movies;
        this.sanitizePosters();
      });
    }else{
      this.movies = this.favorites.getFavorites;
      this.sanitizePosters();
      return;
    }
  }

  sanitizePosters() {
    this.movies.forEach(movie => {
      console.log(movie.poster)
      movie.posterSafeUrl = this.sanitizer.bypassSecurityTrustStyle('url(' + movie.poster + ')');
    });
  }

  onSearch(search: string) {
    this.searchTerm = search.toLowerCase();
    return this.foundMovies = this.movies.filter(movie => {
      const { title, actors, genre } = movie;
      return (
        title.toLowerCase().includes(this.searchTerm) ||
        actors.toLowerCase().includes(this.searchTerm) ||
        genre.toLowerCase().includes(this.searchTerm)
      ) && movie;
    });
  }
}
