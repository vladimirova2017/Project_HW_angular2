import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {MovieService} from './services/movie.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MovieService
  ],
  exports: [
    HttpModule
  ]
})

export class CoreModule {

}

