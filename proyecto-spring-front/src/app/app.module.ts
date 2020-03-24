import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PerfilModule } from './modulos/perfil/perfil.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { PersonaModule } from './modulos/persona/persona.module';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './inicio/inicio.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PerfilModule,
    UsuarioModule,
    PersonaModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
