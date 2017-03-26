import { Component }                from '@angular/core';
import { DomSanitizer }             from '@angular/platform-browser';
import { MdIconRegistry }           from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [MdIconRegistry]
})
export class AppComponent {
  title = 'app works!';

constructor( iconReg: MdIconRegistry, sanitizer: DomSanitizer) {
    iconReg.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/add.svg'))
        .addSvgIcon('alarm', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/alarm.svg'))
        .addSvgIcon('calender-blank', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/calender-blank.svg'))
        .addSvgIcon('calender-month', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/calender-month.svg'))
        .addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/settings.svg'))
        .addSvgIcon('borderless-settings', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/borderless-settings.svg'))
        .addSvgIcon('file', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/file.svg'))
        .addSvgIcon('graph', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/graph.svg'))
        .addSvgIcon('block-layout', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/block-layout.svg'))
        .addSvgIcon('bar-layout', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/bar-layout.svg'))
        .addSvgIcon('add-project', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/add-project.svg'))
        .addSvgIcon('triangle', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/triangle.svg'))
        .addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/logo.svg'))
        .addSvgIcon('cross', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/cross.svg'))
        .addSvgIcon('attach', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/attach.svg'))
        .addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/plus.svg'))
        .addSvgIcon('desktop', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/desktop.svg'))
        .addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/search.svg'))
        .addSvgIcon('groups', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/groups.svg'))
        .addSvgIcon('chevron', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/chevron.svg'))
        .addSvgIcon('online', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/online.svg'))
        .addSvgIcon('offline', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/offline.svg'))
        .addSvgIcon('circle-cross', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/circle-cross.svg'))
        .addSvgIcon('circle-tick', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/tick-circle.svg'))
    }
}
