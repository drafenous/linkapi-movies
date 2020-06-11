import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;

  searchText = '';
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitSearch(){
    this.search.emit(this.searchText);
  }
}
