import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { frontEndRouting } from './front-end.routes';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        frontEndRouting,
        MaterialModule.forRoot(),
    ],
    providers: [

    ],
    declarations: [

    ],

})
export class FrontEndModule { }