import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  civ;

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase().trim();
    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText) ||
       it.expansion.toLowerCase().includes(searchText) ||
        it.army.toLowerCase().includes(searchText);
    });
  }

}
