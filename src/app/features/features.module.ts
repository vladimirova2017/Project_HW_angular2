import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MovieListModule} from './movie-list/index';
import {MovieItemModule} from './movie-item/index';

import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    MovieListModule,
    MovieItemModule
]
})

export class FeaturesModule {
}
