import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService{

    readonly url = 'http://localhost:3000/usuarios';

    constructor(private http: HttpClient){}

    get(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.url);
    }

    add(u : Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.url, u);
    }

}