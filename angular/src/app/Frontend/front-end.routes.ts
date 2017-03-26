import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontEndComponent } from './front-end.component';
import { LoginComponent } from './Components/login/login.component';

export const FrontEndRoutes: Routes = [
    {
        path: '',  // you can keep it empty if you do not want /home
        component: FrontEndComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            }
        ]

    },


]
export const frontEndRouting: ModuleWithProviders = RouterModule.forRoot(FrontEndRoutes);