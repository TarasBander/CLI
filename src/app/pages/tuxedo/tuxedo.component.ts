import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Component({
    selector: 'tuxedo',
    templateUrl: './tuxedo.component.html'
})
export class TuxedoComponent implements OnInit{
    data: any;

    constructor(private http: HttpClient){}

    ngOnInit(){       
        this.http.get('https://swapi.co/api/people/6/').subscribe((data:any) => this.data = data.films);
    }
 }