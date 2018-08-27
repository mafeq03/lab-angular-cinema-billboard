import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  id: number;
  movie: Object;

  constructor( 
    private movieService : MoviesServiceService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params) => { 
      this.id = params.id;
      this.movie = this.movieService.getMovie(this.id);
    });
  }
}
