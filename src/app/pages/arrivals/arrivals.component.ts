import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
  
@Component({
    selector: 'arrivals',
    templateUrl: './arrivals.component.html',
    styleUrls: ['./arrivals.component.scss']
})
export class ArrivalsComponent implements OnInit{ 
    data: any;
    loading: boolean = false;

    constructor(private dataService: DataService){}

    ngOnInit(){  
        this.loading = true;
        this.dataService.getData(1).subscribe((data:any) => {
            this.data = data.films;
            this.loading = false;
        });
    }
}