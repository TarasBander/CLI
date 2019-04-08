import { Component} from '@angular/core';
  
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    pages = [
        {header: "NEW ARRIVALS", text: "REVIVE YOUR WARDROBE WITH CHIC KNITS", btn: "TAKE A LOOK", classes: "col-lg-6 col-sm-12"},
        {header: "TUXEDO", text: "REVIVE YOUR WARDROBE WITH CHIC KNITS", btn: "TAKE A LOOK", classes: "col-lg-6 col-sm-12"},
        {header: "SWEATER", text: "REVIVE YOUR WARDROBE WITH CHIC KNITS", btn: "SHOP NOW", classes: "col-lg-8 col-sm-12"},
        {header: "TREKKING SHOES", text: "", btn: "", classes: "col-lg-4 col-sm-12"},
        {header: "CASUAL GLASSES", text: "", btn: "", classes: "col-lg-4 col-sm-12"},
        {header: "FRESH LOOK T-SHIRT", text: "", btn: "SHOP NOW", classes: "col-lg-4 col-sm-12"},
        {header: "ELEGANT WATCHES", text: "", btn: "", classes: "col-lg-4 col-sm-12"}
    ]
 }