import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Component({
    selector: 'shirt',
    templateUrl: './shirt.component.html'
})
export class ShirtComponent {
    data: any;

    constructor(private http: HttpClient){}

    ngOnInit(){       
        this.http.get('https://swapi.co/api/people/3/').subscribe((data:any) => this.data = data.films);
    }
 }