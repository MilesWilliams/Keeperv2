import { Component, OnInit } from '@angular/core';
import { TaskService } from'../../Services/task.service';
import { SearchTaskPipe }      from '../../Pipes/Search-bar/search.pipe';



@Component({
	moduleId: module.id,
	selector: "content-inner",
	templateUrl: "tasks.component.html",
	providers: [TaskService,SearchTaskPipe]
})

export class TasksComponent implements OnInit{
	
	selectedTask: any[];
	constructor( private taskService:TaskService ){}
	tasks = [];
	ngOnInit(){
		this.fetchAllLocations()
	}
	filter = 'All';
    filters =  [{code: 'All', selected: true, value: 'All'}, {code: 'Open', value: false}, {code: 'Completed', value:true}];

	fetchAllLocations() {
        this.taskService.tasksAll()
            .subscribe(
				tasks => {this.tasks = tasks},
                error => window.console.log(error),
				() =>window.console.log(this.tasks)
            );
        console.log(this.tasks)
    }
	onSelect(task) :void{
		
		if (this.selectedTask === task) {
			this.selectedTask = null;
		}
		else {
			this.selectedTask = task;
		}
		
	}

	onChecked(task): void {
		if (task.completed == false || task.completed == 0 ) {
			task.completed = 1
		}
		else if(task.completed == true || task.completed == 1 ){
			task.completed = 0
		}

		this.taskService.taskUpdate(task.id, task)
			.subscribe(
				() => console.log(task)
			)
	}

}