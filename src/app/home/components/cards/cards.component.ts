import { Component, OnInit, Input } from '@angular/core';
import { Movies } from 'src/app/models/movies';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() movie: Movies;
  constructor() {

  }

  ngOnInit(): void {
  }

}
