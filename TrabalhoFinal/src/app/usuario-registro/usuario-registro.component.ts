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

    ngOnInit(): void {
    }

    onSubmit() {

        var nome_registro = this.nomeRegistro;
        var email_registro = this.emailRegistro;
        var senha_registro = this.senhaRegistro;

        this.usuario = new Usuario(nome_registro, email_registro, senha_registro);

        console.log(this.usuario);
    }

}
