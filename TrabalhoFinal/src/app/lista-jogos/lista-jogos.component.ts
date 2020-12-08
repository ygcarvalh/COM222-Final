import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Jogo } from "../jogo";
import { JogoService } from '../jogoRegistro.service';

@Component({
  selector: 'app-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.css']
})
export class ListaJogosComponent implements OnInit {

    listaJogos: any;
    teste = null;

    constructor(
      private jogoService: JogoService) { }


    ngOnInit(): void {
        this.jogoService.get()
          .subscribe(
            data => {
              this.listaJogos = data;
              console.log(data);
            },
            error  => {
              console.log(error);
          });
    }

}
