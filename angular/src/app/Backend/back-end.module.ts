import { NgModule }      									from '@angular/core';
import { CommonModule } 									from '@angular/common';
import { FormsModule, ReactiveFormsModule } 				from '@angular/forms';
import { MaterialModule } 									from '@angular/material';
import { backEndRouting } 									from './back-end.routes';

@NgModule({
	imports: [ 
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		backEndRouting,
		MaterialModule.forRoot(),
	],
	providers: [

	],
	declarations: [ 
		
  ],

})
export class BackEndModule {}