import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Project } from '../../Models/project.model';
import { ProjectsService } from '../../Services/projects.services';
import { TaskService } from '../../Services/task.service';

@Component({
    moduleId:module.id,
    selector:'project-task-add',
    templateUrl: 'project-task-add.component.html',
    providers: [ProjectsService, TaskService]
})

export class ProjectTaskAddComponent implements OnInit {

    @Input()
    selectedProject: Project;
    project : Project;
    @Output()
    deselected: EventEmitter<string> = new EventEmitter();


    constructor(private projectsService: ProjectsService, private route: ActivatedRoute, private taskService: TaskService) {}

    ngOnInit(){
        
        this.route.params
            .switchMap((params: Params) => this.projectsService.projectId(params['id']))
            .subscribe(project => this.project = project);
        
    }

    todoAdd = new FormGroup({
        title: new FormControl(),
        due_date: new FormControl(),
        project: new FormControl(),
        sub_project: new FormControl(),
        notes: new FormControl(),
        categories: new FormControl(),
    })

    close(){
        this.deselected.emit('complete')
    }
        
    save() {
        let newTodo = {
            due_date: this.todoAdd.value.due_date,
            title: this.todoAdd.value.title,
            notes: this.todoAdd.value.notes,
            project: this.project.id,
            sub_project: this.todoAdd.value.sub_project,
            organization: 1,
        }

        this.taskService.taskCreate(newTodo)
            .subscribe(
                () => console.log(newTodo)
            );
        this.deselected.emit('complete')
    }
    
}