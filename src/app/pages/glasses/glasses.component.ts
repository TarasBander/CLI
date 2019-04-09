import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Component({
    selector: 'glasses',
    templateUrl: './glasses.component.html'
})
export class GlassesComponent implements OnInit{ 
    data: any;

    constructor(private http: HttpClient){}

    ngOnInit(){       
        this.http.get('https://swapi.co/api/people/2/').subscribe((data:any) => this.data = data.films);
    }
}