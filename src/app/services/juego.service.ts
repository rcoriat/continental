import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } 
from 'angularfire2/firestore';
import { Reference } from '@firebase/storage-types';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { Juego } from '../models/Juego';
import { Subject } from 'rxjs/Subject';
import { switchMap } from 'rxjs/operator/switchMap';

@Injectable()
export class JuegoService {
juegosCollection: AngularFirestoreCollection<Juego>;
juegos: Observable<Juego[]>;
juegosArray: Juego[];
juegoactual: Juego;
generoBuscado: Juego[];


  constructor(public afs: AngularFirestore) {
    //this.juegos = this.afs.collection('juegos').valueChanges();
    this.juegos = this.afs.collection('juegos').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Juego;
        data.id = a.payload.doc.id;
        return data;
      });
    });

    this.juegos.subscribe(prueba => {
      this.juegosArray = prueba;
    })
  }

  getJuegos(){
    return this.juegos;
  }

  busquedaTitulo(titulo: string){

    for(let i=0; i<this.juegosArray.length; i++){
      if(this.juegosArray[i].titulo == titulo){
        this.juegoactual = this.juegosArray[i];
      }
    }

    this.busquedaGenero(this.juegoactual.genero);
    return this.generoBuscado;

  }


  busquedaGenero(gen: string){
    this.juegosCollection = this.afs.collection('juegos', ref => ref.where('genero', '==', gen));
    this.juegos = this.juegosCollection.valueChanges();
    this.juegos.subscribe(prueba => {
      console.log(prueba);
      this.generoBuscado = prueba;
    })
  }
}