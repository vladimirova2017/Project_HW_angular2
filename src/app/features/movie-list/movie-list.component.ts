import {Component, OnInit, OnDestroy} from '@angular/core';
import {MovieService} from '../../core/services/movie.service';
import {PosterMovie} from "../../shared/poster.models";
import {Router} from '@angular/router';
import {Subscription}   from 'rxjs/Subscription';


@Component({
  moduleId: module.id,
  selector: 'movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.css'],
  providers: [MovieService]
})

export class MovieListComponent implements OnInit, OnDestroy {
  itemData: PosterMovie[];
  flagLikes: boolean = false;
  flagRating: boolean = false;

  ratingClicked: number;
  itemIdRatingClicked: number;
  subscription: Subscription;

  ratingComponetClick(clickObj: any): void {
    let item = this.itemData.filter((item: any) => item.id === clickObj.itemId);
    if (!!item && item.length === 1) {
      item[0].stars = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = clickObj.itemId;
    }
  }

  searchItemMovie(searchTitle: string) {
    this.service.getItems().subscribe(
      result => {
        this.itemData = result.filter((item: PosterMovie) => (item['title'].toLowerCase().indexOf(searchTitle) !== -1));
      });
  }

  sortItemMovie(sortBy: string) {
    if (sortBy == 'likes') {
      this.sortByLikes()
    } else {
      this.sortByRating()
    }
  }

  sortByLikes() {
    this.service.getItems().subscribe(
      result => {
        if (!this.flagLikes) {
          this.itemData = result.sort((a: any, b: any) => b['likes'] - a['likes']);
        } else {
          this.itemData = result.sort((a: any, b: any) => a['likes'] - b['likes']);
        }
        this.flagLikes = !this.flagLikes;
      }
    );
  }

  sortByRating() {
    this.service.getItems().subscribe(
      result => {
        if (!this.flagRating) {
          this.itemData = result.sort((a: any, b: any) => b['stars'] - a['stars']);
        } else {
          this.itemData = result.sort((a: any, b: any) => a['stars'] - b['stars']);
        }
        this.flagRating = !this.flagRating
      }
    )
  }

  like(item: PosterMovie, like: boolean) {
    if (like) {
      item['likes']++;
    } else {
      item['likes']--;
    }
    this.likeRender(item);
  }

  getItemData() {
    return this.itemData;
  }

  setItemData(itemData: PosterMovie[]) {
    return this.itemData = itemData;
  }

  movieItem(item: PosterMovie) {
    this.router.navigate(['/movie-item', item.id]);
  }

  constructor(private service: MovieService,
              private router: Router) {
    this.service.getItems().subscribe(
      result => this.itemData = result
    );
  }

  ngOnInit() {
    this.subscription = this.service.getItems().subscribe(
      result => this.itemData = result
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private likeRender(item: PosterMovie) {
    this.service.likeMovie(item).subscribe(
      result => result)
  };
}
