import { Component} from '@angular/core';
  
@Component({
    selector: 'cm-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent { 
    navItems = [
        {link: '', title: 'HOME'},
        {link: '/arrivals', title: 'NEW ARRIVALS'},
        {link: '/tuxedo', title: 'TUXEDO'},
        {link: '/sweater', title: 'SWEATER'},
        {link: '/shoes', title: 'SHOES'},
        {link: '/glasses', title: 'GLASSES'},
        {link: '/shirt', title: 'T-SHIRT'},
        {link: '/watches', title: 'WATCHES'}
    ]
}