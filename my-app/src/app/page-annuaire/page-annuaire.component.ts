import { Component, OnInit } from '@angular/core';
import { NUMEROS } from './mock-annuaires';

@Component({
  selector: 'app-page-annuaire',
  templateUrl: './page-annuaire.component.html',
  styleUrls: ['./page-annuaire.component.css']
})
export class PageAnnuaireComponent implements OnInit {

  numeros = NUMEROS;
  
  constructor() { }

  ngOnInit() {
  }

}
