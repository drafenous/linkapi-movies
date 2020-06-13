import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUserCircle = faUserCircle;
  currentPath: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentPath = this.router.url;
    console.log(this.currentPath);
  }
}
