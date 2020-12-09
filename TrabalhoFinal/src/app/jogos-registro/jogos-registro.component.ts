import { Component, OnInit } from '@angular/core';
import { JogoService } from '../jogoRegistro.service';

import { AppComponent } from '../app.component'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-jogos-registro',
    templateUrl: './jogos-registro.component.html',
    styleUrls: ['./jogos-registro.component.css']
})
export class jogosRegistroComponent implements OnInit {

    constructor(
        private jogoService: JogoService,
        private statusUser: AppComponent,
        private http: HttpClient) { }

    consoleJogo: string;
    tituloJogo: string;
    resumoJogo: string;
    devJogo: string;
    generoJogo: string;
    pathImagemJogo: string;
    mediaJogo: string = "";

    usuarioNaoLogado = this.statusUser.getStatusUserLogado();

    ngOnInit(): void {
        this.jogoService.get()
    }

    onSubmit() {

        if(this.consoleJogo == '-1' || !this.consoleJogo){

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
                title: 'Por favor, informe o console!'
              })

              return;
            
        }

        if(this.consoleJogo == '-1' || !this.consoleJogo){

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
                title: 'Por favor, informe o console!'
              })

              return;
            
        }

        if(this.tituloJogo == '' || !this.tituloJogo){

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
                title: 'Por favor, informe o título!'
              })

              return;
            
        }

        if(this.resumoJogo == '' || !this.resumoJogo){

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
                title: 'Por favor, informe o resumo!'
              })

              return;
            
        }

        if(this.devJogo == '' || !this.devJogo){

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
                title: 'Por favor, informe o desenvolvedor!'
              })

              return;
            
        }

        if(this.generoJogo == '-1' || !this.generoJogo){

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
                title: 'Por favor, informe o gênero!'
              })

              return;
            
        }
        this.jogoService.add({
            console: this.consoleJogo, titulo: this.tituloJogo, resumo: this.resumoJogo,
            dev: this.devJogo, genero: this.generoJogo, pathImagem: this.pathImagemJogo,
            media: this.mediaJogo,
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

    onChange(event) {
        // console.log(event);

        // var selectedFiles = <FileList>event.srcElement.files;
        // var foto = selectedFiles[0];

        // const formData = new FormData();
        // formData.append(this.tituloJogo, foto);

        // this.http.post<any>("http://localhost:8080/fotos", formData)
        //     .subscribe(resposta => console.log('Upload ok'));
        
    }
}
