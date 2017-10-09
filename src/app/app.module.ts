import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms';

import {AppComponent}  from './app.component';
import {HeaderComponent}  from './shared/header/header.component';
import {FooterComponent}  from './shared/footer/footer.component';
import {SortButtonsComponent}  from './shared/sort-buttons/sort-buttons.component';
import {SearchButtonComponent}  from './shared/search-button/search-button.component';
import {SearchFilter} from './features/pipe/search-filter/search-filter.pipe'

import {MovieListComponent} from "./features/movie-list/movie-list.component";
import {MovieItemComponent} from "./features/movie-item/movie-item.component";
import {StarRatingComponent} from "./shared/rating/rating.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SortButtonsComponent,
    SearchButtonComponent,
    SearchFilter,
    MovieListComponent,
    MovieItemComponent,
    StarRatingComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

