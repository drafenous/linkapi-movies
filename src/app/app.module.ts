import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './commom/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './home/components/cards/cards.component';
import { SearchComponent } from './home/components/search/search.component';
import { NotFoundComponent } from './commom/not-found/not-found.component';
import { FavButtonComponent } from './commom/fav-button/fav-button.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardsComponent,
    SearchComponent,
    NotFoundComponent,
    FavButtonComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
