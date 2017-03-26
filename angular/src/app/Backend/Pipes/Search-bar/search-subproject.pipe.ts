import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe ({
    name: "searchSubproject",
    pure: true
})

@Injectable()
export class SearchSubProjectPipe implements PipeTransform {
    transform(items: any[], filterValue: string): any {
        if(!filterValue) {
          return items;
        }
        if(!items) {
          return [];
        }

        return items.filter(item => {
            if(item != null && item.name){
                var subproject = item;
                return subproject.name.toLowerCase().startsWith(filterValue.toLowerCase());
            }
        });
    };
}