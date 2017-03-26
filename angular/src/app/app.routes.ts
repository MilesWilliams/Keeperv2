import { ModuleWithProviders}       from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { BackEndComponent }        from './Backend/back-end.component';
import { FrontEndComponent }         from './Frontend/front-end.component';
export const routes: Routes = [
    {   path: '', redirectTo: '', pathMatch:'full'},
    {
        path: '',  // you can keep it empty if you do not want /home
        component: FrontEndComponent,
    },
    {
        path: 'dashboard',  // you can keep it empty if you do not want /home
        component: BackEndComponent,
    }

]
 
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);