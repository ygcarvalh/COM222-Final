import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Jogo } from './jogo';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class JogoService{

    readonly url = 'http://localhost:3000/jogos';

    constructor(private http: HttpClient){}

    get(): Observable<Jogo[]>{
        return this.http.get<Jogo[]>(this.url);
    }

    add(j : Jogo): Observable<Jogo> {
        return this.http.post<Jogo>(this.url, j);
    }

    updateJogo(j : Jogo, id): Observable<Jogo> {
        let endPoints = "/" + id;
        console.log(this.url + endPoints);
        return this.http.put<Jogo>(this.url + endPoints, j);
    }

}