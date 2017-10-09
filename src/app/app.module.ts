import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms';

import {AppComponent}  from './app.component';
import {HeaderComponent}  from './shared/header/header.component';
import {FooterComponent}  from './shared/footer/footer.component';
import {SortButtonsComponent}  from './shared/sort-buttons/sort-buttons.component';
import {SearchButtonComponent}  from './shared/search-button/search-button.component';
/*import {StarsComponent}  from './shared/stars/stars.component';*/
import {SearchFilter} from './features/pipe/search-filter/search-filter.pipe'

import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {ItemData} from "./inMemServer/inMemoryServer";
import {MovieListComponent} from "./features/movie-list/movie-list.component";
import {Routes, RouterModule} from "@angular/router";
import {MovieItemComponent} from "./features/movie-item/movie-item.component";
import {StarRatingComponent} from "./shared/rating/rating.component";

const appRoutes: Routes =[
  { path: "movie-list", component: MovieListComponent },
  { path: 'movie-item/:id', component: MovieItemComponent},
  { path: "", redirectTo: "movie-list", pathMatch: "full" }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SortButtonsComponent,
    SearchButtonComponent,
   /* StarsComponent,*/
    SearchFilter,
    MovieListComponent,
    MovieItemComponent,
    StarRatingComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ItemData),
    RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

