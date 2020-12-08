import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { jogosRegistroComponent } from './jogos-registro/jogos-registro.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { ListaReviewsComponent } from './lista-reviews/lista-reviews.component';
import { CriarReviewComponent } from './criar-review/criar-review.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

const routes: Routes = [
	{ path: '', component: MenuPrincipalComponent },
	{ path: 'usuario-registro', component: UsuarioRegistroComponent },
	{ path: 'usuario-login', component: UsuarioLoginComponent },
	{ path: 'jogo-registro', component: jogosRegistroComponent },
	{ path: 'lista-reviews', component: ListaReviewsComponent },
	{ path: 'criar-review', component: CriarReviewComponent },
	{ path: 'menu-principal', component: MenuPrincipalComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
