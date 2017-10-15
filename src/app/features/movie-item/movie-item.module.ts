import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MovieItemComponent} from "./movie-item.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MovieItemComponent
  ],
  exports:[MovieItemComponent]
})

export class MovieItemModule {
}
