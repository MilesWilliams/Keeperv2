import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe ({
    name: "searchTask",
    pure: true
})

@Injectable()
export class SearchTaskPipe implements PipeTransform {
    transform(items: any[], filterValue: string): any {
        if(!filterValue) {
          return items;
        }
        if(!items) {
          return [];
        }

        return items.filter(item => {
            if(item != null && item.title){
                var title = item;
                return title.title.toLowerCase().startsWith(filterValue.toLowerCase());
            }
        });
    };
}