import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
  
@Component({
    selector: 'sweater',
    templateUrl: './sweater.component.html'
})
export class SweaterComponent implements OnInit{
    data: any;
    loading: boolean = false;

    constructor(private dataService: DataService){}

    ngOnInit(){  
        this.loading = true;
        this.dataService.getData(5).subscribe((data:any) => {
            this.data = data.films;
            this.loading = false;
        });
    }
 }