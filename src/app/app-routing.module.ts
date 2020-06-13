import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'favorites', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: ':title', component: MovieComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
