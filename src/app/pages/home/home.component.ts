import { Component} from '@angular/core';
  
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    pages = [
        {header: "NEW ARRIVALS", text: "REVIVE YOUR WARDROBE WITH CHIC KNITS", btn: "TAKE A LOOK", classes: "col-lg-6 col-sm-12", link: '/arrivals', url: '../../../assets/img/new_arrival.png'},
        {header: "TUXEDO", text: "REVIVE YOUR WARDROBE WITH CHIC KNITS", btn: "TAKE A LOOK", classes: "col-lg-6 col-sm-12", link: '/tuxedo', url: '../../../assets/img/tuxedo.png'},
        {header: "SWEATER", text: "REVIVE YOUR WARDROBE WITH CHIC KNITS", btn: "SHOP NOW", classes: "col-lg-8 col-sm-12", link: '/sweater', url: '../../../assets/img/sweater.png'},
        {header: "TREKKING SHOES", text: "", btn: "", classes: "col-lg-4 col-sm-12", link: '/shoes', url: '../../../assets/img/shoes.png'},
        {header: "CASUAL GLASSES", text: "", btn: "", classes: "col-lg-4 col-sm-12", link: '/glasses', url: '../../../assets/img/glasses.png'},
        {header: "FRESH LOOK T-SHIRT", text: "", btn: "SHOP NOW", classes: "col-lg-4 col-sm-12", link: '/shirt', url: '../../../assets/img/t_shirt.png'},
        {header: "ELEGANT WATCHES", text: "", btn: "", classes: "col-lg-4 col-sm-12", link: '/watches', url: '../../../assets/img/watches.png'}
    ]
 }