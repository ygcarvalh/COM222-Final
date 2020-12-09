import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JogoService } from '../jogoRegistro.service';
import { ReviewService } from '../reviewRegistro.service';
import { AppComponent } from '../app.component'
import { Review } from '../review';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
	selector: 'app-menu-principal',
	templateUrl: './menu-principal.component.html',
	styleUrls: ['./menu-principal.component.css'],
})

export class MenuPrincipalComponent {

	usuarioNaoLogado = this.statusUser.getStatusUserLogado();

	reviewModel = new Review("", 0, '');
	listaJogos = [];
	listaReview = [];
	consoleSelecionado = '';
	jogosNaoListados = true;
	reviewsNaoListadas = true;
	criarReview = false;
	consoleAtual = '';
	id_jogo = '';
	listaItens = [];

	itemSelecionado = '';
	itemLista = "";

	constructor(
		private router: Router,
		private jogoService: JogoService,
		private reviewService: ReviewService,
		private statusUser: AppComponent,

	) { }


	selecionaConsole(consolePlataforma) {

		this.consoleSelecionado = consolePlataforma;
		this.consoleAtual = consolePlataforma.toUpperCase();
		this.jogosNaoListados = false;
		this.consultaJogos();
		//this.router.navigateByUrl('/lista-jogos');

	}

	consultaJogos() {

		this.jogoService.get()
			.subscribe(
				data => {
					this.listaJogos = []
					this.listaItens = ["Ação", "Aventura", "Estratégia", "RPG", "Esporte", "Simulação"];
					data.forEach(element => {
						if (element.console == this.consoleSelecionado) {
							//console.log(this.listaJogos)
							this.listaJogos.push(element);
							this.listaItens.push(element.dev);
							// console.log(this.listaItens);
						}
					});
				},
				error => {
					console.log(error);
				});
	}

	voltaMenuPrincipal() {

		this.jogosNaoListados = true;
		this.reviewsNaoListadas = true;
		this.criarReview = false;
	}

	listarReview(id) {

		this.reviewsNaoListadas = false;
		this.jogosNaoListados = true;

		this.id_jogo = id;

		this.reviewService.get()
			.subscribe(
				data => {
					this.listaReview = []
					let array = data
					array.forEach(element => {
						if (element.jogo == this.id_jogo)
							this.listaReview.push(element);
					});
				},
				error => {
					console.log(error);
				});
	}

	cadastroReview() {

		console.log(this.id_jogo)
		this.criarReview = true;
		// this.reviewsNaoListadas = true;
	}

	onSubmit() {

		//cadastro das reviews
		this.reviewService.add({
			review: this.reviewModel.review, nota: this.reviewModel.nota, jogo: this.id_jogo

		})
			.subscribe(
				(jog) => {
					console.log(jog);
					this.clearFields();
					this.listarReview(this.id_jogo);
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
			title: 'Review Cadastrada com sucesso!'
		})
	}

	calcularMedia() {
	}

	aplicarFiltro() { }

}
