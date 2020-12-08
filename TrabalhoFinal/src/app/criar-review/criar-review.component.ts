import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { ReviewService } from '../reviewRegistro.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { JogoService } from '../jogoRegistro.service';

import { Router } from '@angular/router';
import { AppComponent } from '../app.component'

@Component({
    selector: 'app-criar-review',
    templateUrl: './criar-review.component.html',
    styleUrls: ['./criar-review.component.css']
})
export class CriarReviewComponent implements OnInit {

    reviewModel = new Review("", "", 0, "");
    idJogoSelecionado = "";

    usuarioNaoLogado = this.statusUser.getStatusUserLogado();

    constructor(
        private router: Router,
        private statusUser: AppComponent,
        private reviewService: ReviewService,
        private jogoService: JogoService
    ) { }

    ngOnInit(): void {
        this.reviewService.get()

    }

    onSubmit() {

        var idJogo = "";

        this.jogoService.get()
            .subscribe(
                data => {
                    data.forEach(element => {
                        if(this.idJogoSelecionado == element._id){
                            idJogo = element._id;
                        }
                    });
                },
                error => {
                    console.log(error);
                });

        this.reviewService.add({
            nome: this.reviewModel.nome, review: this.reviewModel.review, nota: this.reviewModel.nota,
            idJogo: this.reviewModel.idJogo
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
        this.reviewModel.nome = "";
        this.reviewModel.review = '';
        this.reviewModel.nota = 0;


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
            title: 'Cadastro da review realizada com sucesso!'
        })
    }

}
