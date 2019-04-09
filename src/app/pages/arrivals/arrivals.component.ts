import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Component({
    selector: 'arrivals',
    templateUrl: './arrivals.component.html',
    styleUrls: ['./arrivals.component.scss']
})
export class ArrivalsComponent { 
    data: any;

    constructor(private http: HttpClient){}

    ngOnInit(){       
        this.http.get('https://swapi.co/api/people/').subscribe((data:any) => this.data = data);
    }
}