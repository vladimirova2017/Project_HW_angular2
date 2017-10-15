import {NgModule}from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItemData} from './inMemServer/inMemoryServer';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { MovieListRoutes } from "./features/movie-list/movie-list.routes";
import { MovieItemRoutes } from "./features/movie-item/movie-item.routes";

export const appRoutes: Routes = [
  ...MovieListRoutes,
  ...MovieItemRoutes,
  {path: '', redirectTo: 'movie-list', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(ItemData)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

