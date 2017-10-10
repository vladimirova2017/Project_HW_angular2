import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'star-rating',
  templateUrl: 'app/shared/rating/rating.component.html',
  styleUrls: ['app/shared/rating/rating.component.css']
})
export class RatingComponent {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inpustName:string;
  ngOnInit(): void {
    this.inpustName = this.itemId + '_rating';
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
}
