import { Component, OnInit } from '@angular/core';
import { Usuario } from "../usuario";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { UsuarioService } from '../usuarioRegistro.service';

import {Router} from '@angular/router';
import {AppComponent} from '../app.component'

@Component({
    selector: 'app-usuario-login',
    templateUrl: './usuario-login.component.html',
    styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

    constructor(
        private usuarioService: UsuarioService,
        private router: Router,
        private statusUser :AppComponent) { }

    emailLogin: string;
    senhaLogin: string;


    
    usuarioNaoLogado = this.statusUser.getStatusUserLogado();

    user : any;
    usuarioModelLogin = new Usuario('', '', '');
    ngOnInit(): void {
    }

    onSubmit() {
        let email_registro = this.usuarioModelLogin.email;
        let senha_registro = this.usuarioModelLogin.senha;
        let statusLogin = 0;

        this.usuarioService.get()
        .subscribe(
          data => {
            this.user = data;
            console.log(data);

            this.user.forEach(element => {
                
                if(element.email == email_registro && element.senha == senha_registro){

                  this.statusUser.setNomeUser(element.nome)
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
                        title: 'Login realizado com sucesso'
                      })

                      this.statusUser.setStatusUserLogado(false);
                      this.router.navigateByUrl('/menu-principal');
                      statusLogin = 1;

                }
            });

            if(statusLogin == 0){
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
                    title: 'Falha ao realizar login'
                  })

            }
          },
          error  => {
            console.log(error);
        });
      
    }

}
