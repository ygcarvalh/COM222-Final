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

    nomeRegistro: string;
    emailRegistro: string;
    senhaRegistro: string;

    ngOnInit(){
        this.usuarioService.get()
            //.subscribe((usus) => this.usuarios = usus);
    }

    onSubmit() {
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
    }

}
