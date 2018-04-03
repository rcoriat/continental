import { Component, OnInit, Input, Injectable } from '@angular/core';
import { InicioService } from '../../services/inicio.service';
import { JuegoService } from '../../services/juego.service';
import { InicioComponent } from '../inicio/inicio.component';
import { Juego } from '../../models/Juego';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  juegos: Juego[];
  inicioComponent: InicioComponent;
  

  constructor() { }

  ngOnInit() {

  }
  
  @Input() showMePartially: boolean;

  setJuegos(juegos: Juego[]){
    this.juegos = juegos;
  }


}
