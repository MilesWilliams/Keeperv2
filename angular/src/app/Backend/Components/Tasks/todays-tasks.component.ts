import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { Task } from '../../Models/task.model';

@Component({
    moduleId : module.id,
    selector : 'todays-tasks',
    templateUrl : 'todays-tasks.component.html',
    providers : [TaskService]
})

export class TodaysTasksComponent implements OnInit {
    tasks:Task[] = []
    selectedTask: any[];
    
    constructor(private taskService:TaskService){}

    ngOnInit(){
        this.getTodaysTasks();
    }
    
    filter = 'All';
    filters =  [{code: 'All', selected: true, value: 'All'}, {code: 'Open', value: false}, {code: 'Completed', value:true}];

    getTodaysTasks() {
        let today = new Date();
        var day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();

        if (month<10) {
            var formatedMonth = '0' + month;
        }else if(month>=10) {
            var formatedMonth = "" + month;
        }
        if (day<10) {
            var formatedDay = "0" + day;
        }else if(day>=10) {
            var formatedDay = "" + day;
        }

        let formatedDate = year + '-' + formatedMonth + '-' + formatedDay;
        console.log(formatedDate)
        this.taskService.taskSearch(formatedDate)
            .subscribe(
                tasks => {this.tasks = tasks},
                error => window.console.log(error),
				() =>window.console.log(this.tasks)
            )
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


