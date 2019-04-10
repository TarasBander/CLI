import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
  
@Component({
    selector: 'arrivals',
    templateUrl: './arrivals.component.html',
    styleUrls: ['./arrivals.component.scss']
})
export class ArrivalsComponent implements OnInit{ 
    data: any;

    constructor(private dataService: DataService){}

    ngOnInit(){  
        this.dataService.getData(1).subscribe((data:any) => this.data = data.films);
    }
}