import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {MovieEditComponent} from "./index";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MovieEditComponent
  ],
  exports:[MovieEditComponent]
})

export class MovieEditModule {
}
