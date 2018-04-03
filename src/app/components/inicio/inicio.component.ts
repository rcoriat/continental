import { Component, OnInit, Input } from '@angular/core';
import { JuegoService } from '../../services/juego.service';
import { Juego } from '../../models/Juego';
import { JuegosComponent } from '../juegos/juegos.component';
import { Observable } from '@firebase/util';
import { ResultadosComponent } from '../resultados/resultados.component'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  tituloactual: string;
  juegos: Juego[];


  constructor(private juegoService: JuegoService) { }

  ngOnInit() {

  }
  showVar: boolean = false;
  toggleChild(){
    this.showVar = !this.showVar;
 }


  busquedaTitulo(event){
    this.juegos =  this.juegoService.busquedaTitulo(this.tituloactual);
  }

}
