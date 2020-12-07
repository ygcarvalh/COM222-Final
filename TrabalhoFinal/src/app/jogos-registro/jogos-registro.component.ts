import { Component, OnInit } from '@angular/core';
import { jogo } from "../jogo";

@Component({
    selector: 'app-jogos-registro',
    templateUrl: './jogos-registro.component.html',
    styleUrls: ['./jogos-registro.component.css']
})
export class jogosRegistroComponent implements OnInit {

    constructor() { }

    jogo: jogo;

    jogoModel = new jogo('', '', '', '', '', '');
    ngOnInit(): void {
    }

    onSubmit() {

        let consoles = this.jogoModel.console;
        let titulo = this.jogoModel.titulo;
        let resumo = this.jogoModel.resumo;
        let dev = this.jogoModel.dev;
        let genero = this.jogoModel.genero;
        let imagem = this.jogoModel.pathImagemJogo;

        this.jogo = new jogo(consoles, titulo, resumo, dev, genero, imagem)
        console.log(this.jogo);
   
    }

}
