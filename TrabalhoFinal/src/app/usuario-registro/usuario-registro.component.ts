import { Component, OnInit } from '@angular/core';
import { Usuario } from "../usuario";
import { UsuarioService } from '../usuarioRegistro.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Router} from '@angular/router';

@Component({
    selector: 'app-usuario-registro',
    templateUrl: './usuario-registro.component.html',
    styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {
    
    constructor(
        private usuarioService: UsuarioService,
        private router: Router) { }

    nomeRegistro: string;
    emailRegistro: string;
    senhaRegistro: string;

    ngOnInit(){
        this.usuarioService.get()
            //.subscribe((usus) => this.usuarios = usus);
    }

    onSubmit() {

        console.log(this.nomeRegistro)
        
        if(this.nomeRegistro == '' || !this.nomeRegistro){

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
                title: 'Por favor, informe o seu nome!'
              })

              return;
            
        }
        if(this.emailRegistro == '' || !this.emailRegistro){

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
                title: 'Por favor, informe o seu Email!'
              })

              return;
            
        }

        if(this.senhaRegistro == '' || !this.senhaRegistro){

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
                title: 'Por favor, informe a sua senha!'
              })

              return;
            
        }

        this.usuarioService.add({nome: this.nomeRegistro, email: this.emailRegistro, senha: this.senhaRegistro})
            .subscribe(
                (usu) => {
                    console.log(usu);
                    this.clearFields();
                },
                (err) => console.error(err)
            )
    }

    clearFields(){
        this.nomeRegistro = '';
        this.emailRegistro = '';
        this.senhaRegistro = '';

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
            title: 'Cadastro realizado com sucesso!'
          })

          this.router.navigateByUrl('/usuario-login');

    }

}
