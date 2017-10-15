import { NgModule } from '@angular/core';
import { RatingComponent } from './rating.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ RatingComponent ],
  exports:    [ RatingComponent ],
  /*imports: [
    CommonModule,
    FormsModule]*/

})
export class RatingModule { }
