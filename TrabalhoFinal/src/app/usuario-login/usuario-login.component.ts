import { Component, OnInit } from '@angular/core';
import { Usuario } from "../usuario";

@Component({
    selector: 'app-usuario-login',
    templateUrl: './usuario-login.component.html',
    styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

    constructor() { }

    emailLogin: string;
    senhaLogin: string;

    usuarioModelLogin = new Usuario('', '', '');
    ngOnInit(): void {
    }

    onSubmit() {
        let email_registro = this.usuarioModelLogin.email;
        let senha_registro = this.usuarioModelLogin.senha;

        console.log(email_registro);
        console.log(senha_registro);
    }

}
