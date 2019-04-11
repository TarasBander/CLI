import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
  
@Component({
    selector: 'watches',
    templateUrl: './watches.component.html'
})
export class WatchesComponent implements OnInit{
    data: any;
    loading: boolean = false;

    constructor(private dataService: DataService){}

    ngOnInit(){  
        this.loading = true;
        this.dataService.getData(7).subscribe((data:any) => {
            this.data = data.films;
            this.loading = false;
        });
    }
 }