import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { environment } from "../environments/environment";
import { JuegosComponent } from './components/juegos/juegos.component';
import { JuegoService } from './services/juego.service';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioService } from './services/inicio.service';
import { ResultadosService } from './services/resultados.service';
import { ResultadosComponent } from './components/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    InicioComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Continental'),
    AngularFirestoreModule
  ],
  providers: [JuegoService, InicioService, ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
