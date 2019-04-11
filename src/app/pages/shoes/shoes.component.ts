import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
  
@Component({
    selector: 'shoes',
    templateUrl: './shoes.component.html'
})
export class ShoesComponent implements OnInit{
    data: any;
    loading: boolean = false;

    constructor(private dataService: DataService){}

    ngOnInit(){  
        this.loading = true;
        this.dataService.getData(4).subscribe((data:any) => {
            this.data = data.films;
            this.loading = false;
        });
    }
 }