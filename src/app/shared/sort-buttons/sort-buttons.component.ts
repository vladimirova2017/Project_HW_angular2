import {Component, Output, EventEmitter} from '@angular/core';
import {MovieService} from '../../core/services/movie.service'

@Component({
  moduleId : module.id,
  selector: 'sort-buttons',
  templateUrl: 'sort-buttons.component.html',
  styleUrls: ['sort-buttons.component.scss'],
  providers: [MovieService]
})

export class SortButtonsComponent {

  name = 'Sort Movies';
  nameByLike = 'by likes';
  nameByRating = 'by rating';

  @Output() eventSortLikes = new EventEmitter<string>();
  @Output() eventSortStars = new EventEmitter<string>();

  likes(): void{
  this.eventSortLikes.emit('likes');
  }

  rating(): void{
    this.eventSortStars.emit('rating');
  }
}
