import {Component, Output, EventEmitter} from "@angular/core";
import {Router} from "@angular/router";
import {MovieService} from "../../core/services/movie.service";
import {NgForm} from "@angular/forms";
import {PosterMovie} from "../../shared/poster.models";

@Component ({
  moduleId : module.id,
  selector: 'movie-edit',
  templateUrl: 'movie-edit.component.html',
  styleUrls: ['movie-edit.component.scss']
})
export class MovieEditComponent {
  form:NgForm;

  constructor(
    private router: Router,
    private service: MovieService
  ) {}


  @Output() eventEditMovie = new EventEmitter<string>();

    onEditMovie(value : PosterMovie): void{
      value.likes = 0;
      value.stars = 0;

      this.service.updateItemMovie(value).subscribe(
        result => result);
      this.router.navigate(['/movie-list']);
  }


  closeMovieItem(): void {
    this.router.navigate(['/movie-list']);
  }
}
