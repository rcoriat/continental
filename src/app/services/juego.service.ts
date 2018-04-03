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

@Injectable()
export class JuegoService {
juegosCollection: AngularFirestoreCollection<Juego>;
juegos: Observable<Juego[]>;
juegosArray: Juego[];
juegoactual: Juego;
generosArray: Juego[];


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

    for(let i=0; i<this.juegoactual.genero.length; i++){
      this.busquedaGenero(this.juegoactual.genero[i]);
    }
  }



  busquedaGenero(titulo: string){
    const genero$ = new Subject<string>();
    const queryObservable = genero$.switchMap(gen =>
    afs.collection('juegos', ref => ref.where('genero', '==', size)).valueChanges();
    );  

    // subscribe to changes
    queryObservable.subscribe(queriedItems => {
      console.log(queriedItems);  
    });

    // trigger the query
    size$.next('large');

    // re-trigger the query!!!
    size$.next('small');  

  }


}


