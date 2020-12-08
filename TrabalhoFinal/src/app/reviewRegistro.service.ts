import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Review } from './review';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ReviewService{

    readonly url = 'http://localhost:3000/reviews';

    constructor(private http: HttpClient){}

    get(): Observable<Review[]>{
        return this.http.get<Review[]>(this.url);
    }

    add(r : Review): Observable<Review> {
        return this.http.post<Review>(this.url, r);
    }

}