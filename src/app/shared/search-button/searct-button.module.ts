import { NgModule } from '@angular/core';
import { SearchButtonComponent } from './search-button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ SearchButtonComponent ],
  exports:    [ SearchButtonComponent ],
  imports: [ FormsModule ]
})
export class SearchButtonModule { }
