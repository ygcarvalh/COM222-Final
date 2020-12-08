import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { jogosRegistroComponent } from './jogos-registro/jogos-registro.component';
import { ListaReviewsComponent } from './lista-reviews/lista-reviews.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CriarReviewComponent } from './criar-review/criar-review.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioRegistroComponent,
    jogosRegistroComponent,
    UsuarioLoginComponent,
    ListaReviewsComponent,
    MenuPrincipalComponent,
    CriarReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }