import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Project } from '../../Models/project.model';

@Pipe ({
    name: "completed",
    pure: true
})

@Injectable()
export class CompletedPipe implements PipeTransform {
    transform(items: Project[]): any {

        for(let item of items) {
            return item.name
        }
        
    };
}