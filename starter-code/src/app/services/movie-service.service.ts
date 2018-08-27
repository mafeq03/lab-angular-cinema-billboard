import { Injectable } from '@angular/core';
import movieList from './movies';

@Injectable()
export class MoviesServiceService {

  movies = movieList;
  constructor() { }

  getMovies(){
    return this.movies;
  }

  getMovie(id){
    return this.movies.find(movie => movie.id === Number(id));
  }
}