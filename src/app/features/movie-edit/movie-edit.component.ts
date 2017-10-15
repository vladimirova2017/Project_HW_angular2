import {Component, Output, EventEmitter} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {MovieService} from "../../core/services/movie.service";
import {NgForm} from "@angular/forms";
import {PosterMovie} from "../../shared/poster.models";
import {stringify} from "@angular/core/src/util";

@Component ({
  moduleId : module.id,
  selector: 'movie-edit',
  templateUrl: 'movie-edit.component.html',
  styleUrls: ['movie-edit.component.scss']
})
export class MovieEditComponent {
  form:NgForm;
  movieItem: PosterMovie;


  constructor(
    private router: Router,
    private service: MovieService
  ) {}

  createArray(value: string): string[] {
    let list: Array<string> = [value];
    return list;
  }

  @Output() eventEditMovie = new EventEmitter<string>();

    onEditMovie(value : PosterMovie): void{
      this.movieItem= new PosterMovie();
      this.movieItem.title = value.title;
      this.movieItem.posterUrl = value.posterUrl;
      this.movieItem.genres = value.genres;
      this.movieItem.actors = value.actors;
      this.movieItem.director = value.director;
      this.movieItem.description = value.description;
      this.movieItem.likes = 0;
      this.movieItem.stars = 0;

      console.log(value);
      console.log(this.movieItem);
      this.service.updateItemMovie(this.movieItem).subscribe(
        result => result)
      this.router.navigate(['/movie-list']);
  }


  closeMovieItem(): void {
    this.router.navigate(['/movie-list']);
  }

  ngOnInit(): void {

  }
}
