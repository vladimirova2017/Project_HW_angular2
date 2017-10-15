import {NgModule}from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieItemComponent} from './features/movie-item/movie-item.component';
import {MovieListComponent} from './features/movie-list/movie-list.component';
import {ItemData} from './inMemServer/inMemoryServer';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {CoreModule} from './core/core.module';
import {HttpModule} from "@angular/http";

export const appRoutes: Routes = [
  {path: 'movie-list', component: MovieListComponent},
  {path: 'movie-item/:id', component: MovieItemComponent},
  {path:'', redirectTo: 'movie-list', pathMatch: 'full'}
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

