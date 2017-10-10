import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieItemComponent} from './movie-item/movie-item.component';
import {MovieService} from '../core/services/movie.service';

import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MovieListComponent,
    MovieItemComponent
  ],
  providers: [MovieService]
})

export class FeaturesModule {
}
