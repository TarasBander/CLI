import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Component({
    selector: 'sweater',
    templateUrl: './sweater.component.html'
})
export class SweaterComponent implements OnInit{
    data: any;

    constructor(private http: HttpClient){}

    ngOnInit(){       
        this.http.get('https://swapi.co/api/people/5/').subscribe((data:any) => this.data = data.films);
    }
 }