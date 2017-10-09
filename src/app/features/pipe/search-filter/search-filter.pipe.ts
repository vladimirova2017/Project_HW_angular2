import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'SearchFilter',
})

export class SearchFilter implements PipeTransform{
  transform(value: any, input: string) {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el: any) {
        return el.toLowerCase().indexOf(input) > -1;
      })
    }
    return value;
  }
}
