import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';
import { GroupsService } from './Services/groups.services';
@Component ({
	moduleId: module.id,
	selector: 'back-end',
	templateUrl: 'back-end.component.html',
	providers: [GroupsService]
})

export class BackEndComponent implements OnInit {
	isConnected: Observable<boolean>;
	groups = [{}]
	constructor(private _groupService:GroupsService) {
		this.isConnected = Observable.merge(
			Observable.of(navigator.onLine),
			Observable.fromEvent(window, 'online').map( () => true),
			Observable.fromEvent(window, 'offline').map( () => false),
		)
	}

	ngOnInit(){
		this.getAllGroups();
	}

	getAllGroups(){
		this._groupService.allGroups()
			.subscribe(
				(allGroups) => this.groups = allGroups,
				(error) => window.console.log(error),
				() => {sessionStorage.setItem('groups', JSON.stringify(this.groups));},
				
			)
	}
}