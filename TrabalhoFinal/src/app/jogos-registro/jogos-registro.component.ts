import { Component, OnInit } from '@angular/core';
import { JogoService } from '../jogoRegistro.service';

import { AppComponent } from '../app.component'
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
    selector: 'app-jogos-registro',
    templateUrl: './jogos-registro.component.html',
    styleUrls: ['./jogos-registro.component.css']
})
export class jogosRegistroComponent implements OnInit {

    constructor(
        private jogoService: JogoService,
        private statusUser: AppComponent) { }

    consoleJogo: string;
    tituloJogo: string;
    resumoJogo: string;
    devJogo: string;
    generoJogo: string;
    pathImagemJogo: string;


    usuarioNaoLogado = this.statusUser.getStatusUserLogado();

    ngOnInit(): void {
        this.jogoService.get()
    }

    onSubmit() {

        this.jogoService.add({
            console: this.consoleJogo, titulo: this.tituloJogo, resumo: this.resumoJogo,
            dev: this.devJogo, genero: this.generoJogo, pathImagem: this.pathImagemJogo
        })
            .subscribe(
                (jog) => {
                    console.log(jog);
                    this.clearFields();
                },
                (err) => console.error(err)
            )
    }

    clearFields() {
        this.consoleJogo = '';
        this.tituloJogo = '';
        this.resumoJogo = '';
        this.devJogo = '';
        this.generoJogo = '';
        this.pathImagemJogo = '';

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Cadastro do jogo realizado com sucesso!'
        })
    }
}
