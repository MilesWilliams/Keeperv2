import 'hammerjs';
import { NgModule }      									from '@angular/core';
import { BrowserModule } 									from '@angular/platform-browser';
import {BrowserAnimationsModule}        from '@angular/platform-browser/animations';
import { MaterialModule } 									from '@angular/material';
import { FormsModule, ReactiveFormsModule }   				from '@angular/forms';
import { HttpModule } 										from '@angular/http';
import {MomentModule} from 'angular2-moment';

import { AppComponent }             						from './app.component';
import { routing } 											        from './app.routes';

import { FrontEndComponent }                                from './Frontend/front-end.component';
import { FrontEndModule }                                   from './Frontend/front-end.module';
import { LoginComponent }                                   from './Frontend/Components/login/login.component';

import { BackEndModule }                                    from './Backend/back-end.module';
import { BackEndComponent }                                 from './Backend/back-end.component';
import { TasksComponent }                                   from './Backend/Components/Tasks/tasks.component';
import { AddTaskComponent }                                 from './Backend/Components/Tasks/add-task.component';
import { TodaysTasksComponent }                             from './Backend/Components/Tasks/todays-tasks.component';
import { ProjectsComponents }                               from './Backend/Components/Projects/projects.component';
import { ProjectEditComponent }                             from './Backend/Components/Projects/projects-edit.component';
import { SingleProjectComponent }                           from './Backend/Components/Projects/project-single.component';
import { SidbarComponent }                                  from './Backend/Components/Sidebar/sidebar.component';
import { ProjectTaskAddComponent }                          from './Backend/Components/Modals/project-task-add.component';
import { ProjectEditModalComponent }                        from './Backend/Components/Modals/project-edit-modal.component';
import { DashboardComponent }                               from './Backend/Components/Dashboard/dashboard.component';
import { ProjectsAddModalComponent }                        from './Backend/Components/Modals/project-add.modal.component';
import { AddProjectComponent }                              from './Backend/Components/Projects/add-project.component';
import { GroupsComponent }                                  from './Backend/Components/Groups/groups.component';
import { SingleGroupComponent }                             from './Backend/Components/Groups/single-group.component';
import { AddGroupComponent }                                from './Backend/Components/Groups/add-group.component';

//Pipes
import { SearchTaskPipe }                                   from './Backend/Pipes/Search-bar/search.pipe';
import { CompletedPipe }                                    from './Backend/Pipes/Completed/completed.pipe';
import { SearchSubProjectPipe }                             from './Backend/Pipes/Search-bar/search-subproject.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrontEndComponent,
    LoginComponent,
    BackEndComponent,
    TasksComponent,
    TodaysTasksComponent,
    AddTaskComponent,
    ProjectsComponents,
    SidbarComponent,
    SingleProjectComponent,
    ProjectEditComponent,
    ProjectTaskAddComponent,
    ProjectEditModalComponent,
    DashboardComponent,
    ProjectsAddModalComponent,
    SearchTaskPipe,
    SearchSubProjectPipe,
    GroupsComponent,
    SingleGroupComponent,
    CompletedPipe,
    AddGroupComponent,
    AddProjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    FrontEndModule,
    BackEndModule,
    MomentModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
