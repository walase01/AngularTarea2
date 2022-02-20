import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/persona.interface';

@Component({
  selector: 'app-tarjeta-persona',
  templateUrl: './tarjeta-persona.component.html',
  styleUrls: ['./tarjeta-persona.component.css']
})
export class TarjetaPersonaComponent implements OnInit {

  @Input() personas! : Persona;

  constructor() { }

  ngOnInit(): void {
  }

}
