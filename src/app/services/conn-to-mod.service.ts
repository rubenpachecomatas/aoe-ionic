import { Injectable } from '@angular/core';
import { Civilization } from '../models/civilization';

@Injectable({
  providedIn: 'root'
})
export class ConnToModService {

  constructor() { }

  CivFromService: Civilization;
  error = 0;

  setCiv(Civ) {
    this.CivFromService = Civ;
    console.log(this.CivFromService);
  }

  getCiv() {
    console.log(this.CivFromService);
    return this.CivFromService;
  }

  setError(error) {
    this.error = error;
    console.log(this.error);
  }
  
  getError() {
    console.log(this.error);
    return this.error;
  }

}
