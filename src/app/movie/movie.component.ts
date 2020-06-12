import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faClock, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { ApiService } from '../services/api.service';
import { Movies } from '../models/movies';
import { Router } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  faCalendar = faCalendar;
  faClock = faClock;
  faArrowLeft = faArrowLeft;

  movie: Movies;
  path: string;

  lists = {
    actors: [],
    genres: [],
    directors: []
  };

  constructor(private location: Location, private api: ApiService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.path = decodeURI(this.router.url).replace(/\//g, '');
    this.getMovie();
  }

  getMovie(){
    return this.api.getData().subscribe((movies: Movies[]) => {
      this.movie = movies.filter(movie => {
        return movie.title === this.path;
      })[0];

      this.sanitizePoster();
      this.generateLists();
    });
  }

  sanitizePoster() {
    return this.movie.posterSafeUrl = this.sanitizer.bypassSecurityTrustStyle('url(' + this.movie.poster + ')');
  }

  back(event) {
    return this.location.back();
  }

  generateLists(){
    const actors = this.movie.actors.split(',');
    const genres = this.movie.genre.split(',');
    const directors = this.movie.director.split(',');

    return this.lists = {actors, genres, directors};
  }
}
