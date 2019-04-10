import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
  
@Component({
    selector: 'shoes',
    templateUrl: './shoes.component.html'
})
export class ShoesComponent implements OnInit{
    data: any;

    constructor(private dataService: DataService){}

    ngOnInit(){       
        this.dataService.getData(4).subscribe((data:any) => this.data = data.films);
    }
 }