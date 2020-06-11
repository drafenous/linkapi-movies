import { SafeUrl } from '@angular/platform-browser';

export interface Movies {
  title: string;
  year: number;
  rated: string;
  runtime: string;
  genre: string;
  director: string;
  actors: string;
  plot: string;
  poster: SafeUrl;
}
