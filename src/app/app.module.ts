import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { environment } from "../environments/environment";
import { JuegosComponent } from './components/juegos/juegos.component';
import { JuegoService } from './services/juego.service';


@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'Continental'),
    AngularFirestoreModule
  ],
  providers: [JuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
