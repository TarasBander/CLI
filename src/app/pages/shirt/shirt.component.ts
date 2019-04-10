import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
  
@Component({
    selector: 'shirt',
    templateUrl: './shirt.component.html'
})
export class ShirtComponent implements OnInit{
    data: any;

    constructor(private dataService: DataService){}

    ngOnInit(){       
        this.dataService.getData(3).subscribe((data:any) => this.data = data.films);
    }
 }