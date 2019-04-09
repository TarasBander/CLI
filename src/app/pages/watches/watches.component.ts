import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Component({
    selector: 'watches',
    templateUrl: './watches.component.html'
})
export class WatchesComponent implements OnInit{
    data: any;

    constructor(private http: HttpClient){}

    ngOnInit(){       
        this.http.get('https://swapi.co/api/people/7/').subscribe((data:any) => this.data = data.films);
    }
 }