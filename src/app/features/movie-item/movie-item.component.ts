import {Component, OnInit, OnDestroy} from '@angular/core';
import {MovieService} from '../../core/services/movie.service';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import {PosterMovie} from '../../shared/poster.models';
import { Subscription }   from 'rxjs/Subscription';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'movie-item',
  templateUrl: 'movie-item.component.html',
  styleUrls: ['movie-item.component.css'],
  providers: [MovieService]
})

export class MovieItemComponent implements OnInit, OnDestroy{
  item: PosterMovie;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getItem(params.get('id')))
      .subscribe(
        result => this.item = result,
        error => console.log(error.statusText)
      );
  }

   ngOnDestroy(): void {
   this.subscription.unsubscribe();
   }

  closeMovieItem(): void {
    this.router.navigate(['/movie-list']);
  }
}

