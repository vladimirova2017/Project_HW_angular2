import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {SearchButtonComponent} from "./search-button/search-button.component";
import {SortButtonsComponent} from "./sort-buttons/sort-buttons.component";
import {FormsModule} from "@angular/forms";
import {RatingComponent} from "./rating/rating.component";


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    RatingComponent,
    SearchButtonComponent,
    SortButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    FooterComponent,
    HeaderComponent,
    RatingComponent,
    SearchButtonComponent,
    SortButtonsComponent
  ]
})

export class SharedModule {
}
