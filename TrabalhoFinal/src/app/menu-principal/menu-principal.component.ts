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
  styleUrls: ['./menu-principal.component.css']
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
    this.reviewsNaoListadas = true;
    // this.reviewsNaoListadas = true;
  }

  onSubmit() {

    //cadastro das reviews

    if (this.reviewModel.review == '' || !this.reviewModel.review) {

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
        icon: 'error',
        title: 'Por favor, informe a review!'
      })

      return;

    }


    if (this.reviewModel.nota < 0 || this.reviewModel.nota > 10 || !this.reviewModel.nota) {

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
        icon: 'error',
        title: 'Por favor, informe uma nota válida! (1 até 10) '
      })

      return;

    }

    this.reviewService.add({
      review: this.reviewModel.review, nota: this.reviewModel.nota, jogo: this.id_jogo

    })
      .subscribe(
        (jog) => {
          console.log(jog);
          this.clearFields();
          this.listarReview(this.id_jogo);
          this.voltaMenuPrincipal();
          this.calcularMediaReview(this.id_jogo);
        },
        (err) => console.error(err)
      )
  }


  calcularMediaReview(jogo) {

    let mediaJogo = 0;
    let cont = 0;
    let somatorio = 0;
    this.reviewService.get()
      .subscribe(
        data => {

          let array = data
          array.forEach(element => {

            if (element.jogo === jogo) {
              somatorio += element.nota;
              cont++;
            }

          });

         mediaJogo = somatorio / cont;
         console.log(mediaJogo)

         //retorna os dados do jogo em um vetor
         let jogoDados = this.getDadosJogo(jogo)

         console.log(jogoDados);
         console.log(jogo);

         this.jogoService.updateJogo({
           console: jogoDados[0], titulo: jogoDados[1], resumo: jogoDados[2],
            dev: jogoDados[3], genero: jogoDados[4], media: String(mediaJogo), pathImagem: "",
         },jogo);

        },
        error => {
          console.log(error);
        });

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

  getDadosJogo(jogo) {

    let dadosJogo = []
    this.listaJogos.forEach(element => {

      if (element._id == jogo) {

        dadosJogo[0] = element.console;
        dadosJogo[1] = element.titulo;
        dadosJogo[2] = element.resumo;
        dadosJogo[3] = element.dev;
        dadosJogo[4] = element.genero;
      }
    });

    return dadosJogo;

  }

}
