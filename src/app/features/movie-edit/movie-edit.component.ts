import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {MovieService} from "../../core/services/movie.service";

@Component ({
  moduleId : module.id,
  selector: 'movie-edit',
  templateUrl: 'movie-edit.component.html',
  styleUrls: ['movie-edit.component.scss']
})
export class MovieEditComponent{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService
  ) {}

  closeMovieItem(): void {
    this.router.navigate(['/movie-list']);
  }
}
