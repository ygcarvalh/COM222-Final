import { Component, OnInit } from '@angular/core';
import { Jogo } from "../jogo";
import { JogoService } from '../jogoRegistro.service';

@Component({
    selector: 'app-jogos-registro',
    templateUrl: './jogos-registro.component.html',
    styleUrls: ['./jogos-registro.component.css']
})
export class jogosRegistroComponent implements OnInit {

    constructor(
        private jogoService: JogoService) { }

    consoleJogo: string;
    tituloJogo: string;
    resumoJogo: string;
    devJogo: string;
    generoJogo: string;
    pathImagemJogo: string;

    ngOnInit(): void {
        this.jogoService.get()
    }

    onSubmit() {

        this.jogoService.add({console: this.consoleJogo, titulo: this.tituloJogo, resumo: this.resumoJogo,
            dev: this.devJogo, genero: this.generoJogo, pathImagem: this.pathImagemJogo})
            .subscribe(
                (jog) => {
                    console.log(jog);
                    this.clearFields();
                },
                (err) => console.error(err)
            )
    }

    clearFields(){
        this.consoleJogo = '';
        this.tituloJogo = '';
        this.resumoJogo = '';
        this.devJogo = '';
        this.generoJogo = '';
        this.pathImagemJogo = '';
    }

}
