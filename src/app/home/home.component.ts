import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Movies } from '../models/movies';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private api: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.api.getData().subscribe((movies: Movies[]) => {
      this.movies = movies;
      this.sanitizePosters();
    });
  }

  sanitizePosters(){
    this.movies.forEach(movie => {
      movie.poster = this.sanitizer.bypassSecurityTrustStyle(`url(${movie.poster})`);
    });
  }

  onSearch(search: string){
    this.searchTerm = search.toLowerCase();
    return this.foundMovies = this.movies.filter(movie => {
      return movie.title.toLowerCase().includes(this.searchTerm) ? movie : false;
    });
  }
}
