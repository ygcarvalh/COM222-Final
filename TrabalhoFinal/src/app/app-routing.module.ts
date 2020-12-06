import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { jogosRegistroComponent } from './jogos-registro/jogos-registro.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';


const routes: Routes = [
  
  { path: 'usuario-registro', component: UsuarioRegistroComponent },
  { path: 'usuario-login', component:  UsuarioLoginComponent },
  { path: 'jogo-registro', component: jogosRegistroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
