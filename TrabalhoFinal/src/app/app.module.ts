import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { jogosRegistroComponent } from './jogos-registro/jogos-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioRegistroComponent,
    jogosRegistroComponent,
    UsuarioLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
