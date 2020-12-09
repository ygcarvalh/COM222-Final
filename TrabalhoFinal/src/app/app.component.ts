import { Component, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  usuarioNaoLogado = true;
  nomeUser = '';

  constructor( private router: Router) { }
  getStatusUserLogado() {

    return this.usuarioNaoLogado;
  }

  setStatusUserLogado(status) {

    this.usuarioNaoLogado = status;

  }

  setNomeUser(nome){

    this.nomeUser = nome;
  }

  logout() {

    this.usuarioNaoLogado = true;
    this.router.navigateByUrl('/usuario-login');

  }
}
