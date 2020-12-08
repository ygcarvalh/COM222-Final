import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JogoService } from '../jogoRegistro.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})

export class MenuPrincipalComponent {

  listaJogos = [];
  consoleSelecionado = '';
  jogosNaoListados = true;

  constructor(
    private router: Router,
    private jogoService: JogoService
  ) { }


  selecionaConsole(consolePlataforma) {

    this.consoleSelecionado = consolePlataforma;
    this.jogosNaoListados = false;
    this.consultaJogos()
    //this.router.navigateByUrl('/lista-jogos');

  }

  consultaJogos() {

    this.jogoService.get()
      .subscribe(
        data => {
          this.listaJogos = []
          data.forEach(element => {
            if (element.console == this.consoleSelecionado)
              //console.log(this.listaJogos)
              this.listaJogos.push(element);

          });
        },
        error => {
          console.log(error);
        });
  }

  voltaMenuPrincipal() {

    this.jogosNaoListados = true;
  }

}
