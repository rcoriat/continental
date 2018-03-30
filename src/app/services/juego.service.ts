import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } 
from 'angularfire2/firestore';
import { Reference } from '@firebase/storage-types';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { Juego } from '../models/Juego';

@Injectable()
export class JuegoService {
//AQUI SE HACE LA INTERACCIÓN CON FIREBASE
juegosCollection: AngularFirestoreCollection<Juego>;
juegos: Observable<Juego[]>;
juegoID: Observable<Juego[]>;


  constructor(public afs: AngularFirestore) {
    //this.juegos = this.afs.collection('juegos').valueChanges();
    this.juegos = this.afs.collection('juegos').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Juego;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getJuegos(){
    return this.juegos;
  }

  getIdTitulo(){
    
  }


}


