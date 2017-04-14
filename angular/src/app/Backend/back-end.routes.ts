import { ModuleWithProviders}       from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { BackEndComponent }         from './back-end.component';
import { TasksComponent }           from './Components/Tasks/tasks.component';
import { AddTaskComponent }         from './Components/Tasks/add-task.component';
import { TodaysTasksComponent }     from './Components/Tasks/todays-tasks.component';
import { DashboardComponent }       from './Components/Dashboard/dashboard.component';

import { ProjectsComponents }       from './Components/Projects/projects.component';
import { AddProjectComponent }      from './Components/Projects/add-project.component';
import { ProjectEditComponent }     from './Components/Projects/projects-edit.component';
import { SingleProjectComponent }   from './Components/Projects/project-single.component';
import { ProjectsAddModalComponent }from './Components/Modals/project-add.modal.component';
import { GroupsComponent }          from './Components/Groups/groups.component';
import { SingleGroupComponent }     from './Components/Groups/single-group.component';
import { AddGroupComponent }        from './Components/Groups/add-group.component';
import { GroupEditComponent }       from './Components/Groups/edit-group.component';
import { ProfileComponent }         from './Components/Profile/profile.component'; 

export const BackEndRoutes: Routes = [
    {
        path: 'dashboard',  // you can keep it empty if you do not want /home
        component: BackEndComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'tasks/today',
                component: TodaysTasksComponent,
            },
            {
                path: 'tasks/all',
                component: TasksComponent,
            },
            {
                path: 'tasks/add',
                component: AddTaskComponent,
            },
            {
                path: 'projects',
                component: ProjectsComponents,
            },
            {
                path: 'projects/add',
                component: AddProjectComponent,
            },
            {
                path: 'projects/edit/:id',
                component: ProjectEditComponent,
            },
            {
                path: 'projects/:id',
                component: SingleProjectComponent,
            },
            {
                path: 'create',
                component: ProjectsAddModalComponent,
            },
            {
                path: 'groups',
                component: GroupsComponent,
            },
            {
                path: 'group/:id',
                component: SingleGroupComponent,
            },
            {
                path: 'group/:id/edit',
                component: GroupEditComponent,
            },
            {
                path: 'groups/add',
                component: AddGroupComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent,
            }
        ]
        
    },

   
]
export const backEndRouting: ModuleWithProviders = RouterModule.forRoot(BackEndRoutes);
