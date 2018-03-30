import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../services/juego.service';
import { Juego } from '../../models/Juego';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  juegos: Juego[];
  constructor(private juegoService: JuegoService) {
   
  }
  
  ngOnInit() {
    this.juegoService.getJuegos().subscribe(juegos => {
      console.log(juegos);
      this.juegos = juegos;//se guardan los juegos
    });
  }

}
