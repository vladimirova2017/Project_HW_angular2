import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {MovieListComponent} from "./movie-list.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MovieListComponent
  ],
  exports:[MovieListComponent]
})

export class MovieListModule {
}
