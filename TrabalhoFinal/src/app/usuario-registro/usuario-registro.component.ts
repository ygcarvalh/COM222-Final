import { Component, OnInit } from '@angular/core';
import { Usuario } from "../usuario";

@Component({
    selector: 'app-usuario-registro',
    templateUrl: './usuario-registro.component.html',
    styleUrls: ['./usuario-registro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {

    constructor() { }

    usuario: Usuario;
    nomeRegistro: string;
    emailRegistro: string;
    senhaRegistro: string;

    usuarioModel = new Usuario('','','');
    ngOnInit(): void {
    }

    onSubmit() {

        let nome_registro = this.usuarioModel.nome;
        let email_registro = this.usuarioModel.email;
        let senha_registro = this.usuarioModel.senha;

        this.usuario = new Usuario(nome_registro, email_registro, senha_registro);

        console.log(this.usuario);
    }

}
