import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Component({
    selector: 'shoes',
    templateUrl: './shoes.component.html'
})
export class ShoesComponent implements OnInit{
    data: any;

    constructor(private http: HttpClient){}

    ngOnInit(){       
        this.http.get('https://swapi.co/api/people/4/').subscribe((data:any) => this.data = data.films);
    }
 }