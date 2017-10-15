import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterModule} from "./footer/index";
import {HeaderModule} from "./header/index";
import {RatingModule} from "./rating/index";
import {SearchButtonModule} from "./search-button/index";
import {SortButtonsModule} from "./sort-buttons/index";
import {FormsModule} from "@angular/forms";
import {EditButtonModule} from "./edit-button/edit-button.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FooterModule,
    HeaderModule,
    RatingModule,
    SearchButtonModule,
    SortButtonsModule,
    EditButtonModule
  ]
})

export class SharedModule {
}
