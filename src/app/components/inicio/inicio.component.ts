import { Component, OnInit, Input } from '@angular/core';
import { JuegoService } from '../../services/juego.service';
import { Juego } from '../../models/Juego';
import { JuegosComponent } from '../juegos/juegos.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  tituloactual: string;
  seleccionado: Juego;

  constructor(private juegoService: JuegoService) { }

  ngOnInit() {

  }
  showVar: boolean = false;
  toggleChild(){
    this.showVar = !this.showVar;
 }


  busquedaTitulo(event){
    this.juegoService.busquedaTitulo(this.tituloactual);
  }

}
