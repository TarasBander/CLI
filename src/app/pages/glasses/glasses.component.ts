import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
  
@Component({
    selector: 'glasses',
    templateUrl: './glasses.component.html'
})
export class GlassesComponent implements OnInit{ 
    data: any;
    loading: boolean = false;

    constructor(private dataService: DataService){}

    ngOnInit(){  
        this.loading = true;
        this.dataService.getData(2).subscribe((data:any) => {
            this.data = data.films;
            this.loading = false;
        });
    }
}