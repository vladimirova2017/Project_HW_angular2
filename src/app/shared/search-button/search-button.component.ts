import {Component, Output, EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  moduleId : module.id,
  selector: 'search-button',
  templateUrl: 'search-button.component.html',
  styleUrls: ['search-button.component.css']
})

export class SearchButtonComponent {
  newSearchTitle: string = '';

  @Output() eventSearch = new EventEmitter<string>();

  onSearch(block_search : NgForm): void{
    this.eventSearch.emit(block_search.value.title);
  }
}

