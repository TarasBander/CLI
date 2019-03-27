import { Component} from '@angular/core';
  
@Component({
    selector: 'special-offers',
    templateUrl: './special-offers.component.html',
    styleUrls: ['./special-offers.component.scss']
})
export class SpecialOffersComponent { 
    specialOffers = [
        {src: 'assets/img/view1.png', alt: 'view1', figure: 'Lorem ipsum dolor1', price: '$40.00'},
        {src: 'assets/img/view2.png', alt: 'view2', figure: 'Lorem ipsum dolor2', price: '$50.00'},
        {src: 'assets/img/view3.png', alt: 'view3', figure: 'Lorem ipsum dolor3', price: '$60.00'},
        {src: 'assets/img/view4.png', alt: 'view4', figure: 'Lorem ipsum dolor4', price: '$70.00'},
    ]
}