import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
  
@Component({
    selector: 'tuxedo',
    templateUrl: './tuxedo.component.html'
})
export class TuxedoComponent implements OnInit{
    data: any;
    loading: boolean = false;

    constructor(private dataService: DataService){}

    ngOnInit(){  
        this.loading = true;
        this.dataService.getData(6).subscribe((data:any) => {
            this.data = data.films;
            this.loading = false;
        });
    }
 }