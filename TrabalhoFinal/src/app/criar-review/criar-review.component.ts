import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { ReviewService } from '../reviewRegistro.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import {Router} from '@angular/router';
import {AppComponent} from '../app.component'

@Component({
	selector: 'app-criar-review',
	templateUrl: './criar-review.component.html',
	styleUrls: ['./criar-review.component.css']
})
export class CriarReviewComponent implements OnInit {

	reviewModel = new Review("", 0);

	usuarioNaoLogado = this.statusUser.getStatusUserLogado();

	constructor( 
		private router: Router,
		private statusUser :AppComponent,
		private reviewService: ReviewService,
		) { }

	ngOnInit(): void {
		this.reviewService.get()

	}

	onSubmit() {

        this.reviewService.add({
            review: this.reviewModel.review, nota: this.reviewModel.nota
            
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
            title: 'Cadastro do jogo realizado com sucesso!'
        })
    }

}
