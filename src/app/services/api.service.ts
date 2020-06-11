import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url = 'https://api-movies.gateway.linkapi.solutions/v1/movies'
  constructor(private http: HttpClient) {}

  getData(): Observable<Movies[]>{
    return this.http.get<Movies[]>(this.url).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  };

}
