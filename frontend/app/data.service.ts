import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {

    constructor(
        private http: HttpClient) { }

    getData<T>(url: string): Observable<T> {
        return this.http.get<T>(url)
            .pipe(
                tap(data => console.log('fetched data: ', data)),
                catchError(this.handleError<T>('Can not fetch data:'))
            );
    }

    private handleError<T>(message = 'Operation failed') {
        return (error: any, caught: any): Observable<T> => {
            console.error(message, ' ', error); // log to console instead
            return caught;
        };
    }

}