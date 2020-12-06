import { Component, OnInit } from '@angular/core';
import { Usuario } from "../usuario";
import { UsuarioService } from '../usuarioRegistro.service';

@Component({
    selector: 'app-usuario-registro',
    templateUrl: './usuario-registro.component.html',
    styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {
    
    constructor(
        private usuarioService: UsuarioService) { }

    usuario: Usuario;
    nomeRegistro: string;
    emailRegistro: string;
    senhaRegistro: string;


    //usuarioModel = new Usuario('','','');

    ngOnInit(){
        this.usuarioService.get()
            //.subscribe((usus) => this.usuarios = usus);
    }

    onSubmit() {
        this.usuarioService.add({nome: this.nomeRegistro, email: this.emailRegistro, senha: this.senhaRegistro})
            .subscribe(
                (usu) => {
                    console.log(usu);
                },
                (err) => console.error(err)
            )
        /*this.usuarioService.add()

        let nome_registro = this.usuarioModel.nome;
        let email_registro = this.usuarioModel.email;
        let senha_registro = this.usuarioModel.senha;

        this.usuario = new Usuario(nome_registro, email_registro, senha_registro);

        console.log(this.usuario);*/
    }

    clearFields(){
        this.nomeRegistro = '';
        this.emailRegistro = '';
        this.senhaRegistro = '';
    }

}
