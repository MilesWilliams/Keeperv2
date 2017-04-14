import { Component, OnInit, OnChanges } 								from '@angular/core';
import { Router }                                             			from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators }     			from '@angular/forms';
import { TaskService } 													from'../../Services/task.service';
import { ProjectsService } 												from '../../Services/projects.services';
import { SubProjectsService }                                           from '../../../Backend/Services/subproject.service';
import { Project } 														from '../../Models/project.model';
import { SubProject }                                                   from '../../Models/sub-project.model';

@Component({
	moduleId: module.id,
	selector: "add-task",
	templateUrl: "add-task.component.html",
	providers: [TaskService, ProjectsService, SubProjectsService]
})

export class AddTaskComponent implements OnInit {
	public redirectUrl: string = '/dashboard/tasks/all';
	todoAddForm = FormGroup;
	project: Project;
	public allProjectNames:Project = JSON.parse(sessionStorage.getItem("projects"));
	public singleProject: Project = JSON.parse(sessionStorage.getItem("singleProj"));
    public subprojects:SubProject;

	constructor(private taskService: TaskService,
				private _router:Router,
				private projectService: ProjectsService, 
				private subProjectsService:SubProjectsService ){}

	getAllProjects() {
		this.projectService.projectsAll()
			.subscribe(
			(allProjects) => this.project = allProjects,
			error => window.console.log(error),
			() => { sessionStorage.setItem("projects", JSON.stringify(this.project)); },
		);
	}
	
	todoAdd = new FormGroup({
		title 		: new FormControl(),
		due_date 	: new FormControl(),
		project 	: new FormControl(),
		sub_project	: new FormControl(),
		notes 		: new FormControl(),
		categories 	: new FormControl(),
		organization: new FormControl(),
	})

	ngOnInit() {
		this.getAllProjects();

	}
    getSubProjects(id) {

        console.log(this.todoAdd.value.project)
		console.log(id)
        this.subProjectsService.subprojectQuery(this.todoAdd.value.project)
            .subscribe(
                (subprojects) => this.subprojects = subprojects,
                (res) => console.log(res.subprojects.name),
				
            )

      
    }
    ngOnChanges(){
        
    }

    getSub(event){
        console.log(event);
    }
	// getSubProj(event){
	// 	this.projectService.projectId(this.todoAdd.value.project)
	// 		.subscribe(
    //             (singleProject) => this.project = singleProject,
    //             error => window.console.log(error),
    //             () => { sessionStorage.setItem("singleProj", JSON.stringify(this.project)); },
    //         );
	// }

	save() {
		let newTodo = {
			due_date: this.todoAdd.value.due_date,
			title: this.todoAdd.value.title,
			notes 		: this.todoAdd.value.notes,
			project		: this.todoAdd.value.project,
            sub_project : this.todoAdd.value.sub_project,
			organization: 1,
		}
		console.log(newTodo)
		this.taskService.taskCreate(newTodo)
            .subscribe(
				() => this.redirect()
            );
	}

	private redirect(): void {
        this._router.navigate([this.redirectUrl]); //use the stored url here
    }
}