import { Routes } from '@angular/router';
import { MovieItemComponent } from './movie-item.component';

export const MovieItemRoutes: Routes = [
  {
    path: 'movie-item/:id',
    component: MovieItemComponent
  }
];

