import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core'

@Injectable()

export class DataService {
    constructor(private http: HttpClient){}

    getData(id: number): any {
        return this.http.get(`https://swapi.co/api/people/${id}/`).pipe(
            map( response => response)
        )
    }
}