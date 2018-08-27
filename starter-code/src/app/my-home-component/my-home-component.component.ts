import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  constructor( private movieService: MoviesServiceService ) { }
  
  movies: Array<any>;

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}