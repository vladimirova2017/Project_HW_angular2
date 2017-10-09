import {Component, OnInit} from "@angular/core";
import {MovieService} from "../../core/services/movie.service";
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import {PosterMovie} from "../../shared/poster.models";
import 'rxjs/add/operator/switchMap';


@Component({
  moduleId : module.id,
  selector : 'movie-item',
  templateUrl: 'movie-item.component.html',
  styleUrls: ['movie-item.component.css'],
  providers: [MovieService]
})

export class MovieItemComponent implements OnInit{
  item : PosterMovie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getItem(params.get('id')))
      .subscribe(
        result => this.item = result,
        error => console.log(error.statusText)
      );
  }

  closeMovieItem() {
    this.router.navigate(['/movie-list']);
  }

}

