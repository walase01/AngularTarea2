import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona.interface';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona : Persona[] = [
    {
      id: 1,
      name: 'jose',
      title: 'sistem ing',
      bio : 'algp'
    },
    {
      id: 6,
      name: "Claire Dejesus",
      title: "Parturient Montes Nascetur Institute",
      bio: "elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla"
    },
    {
      id: 8,
      name: "Yael Webster",
      title: "Tellus Incorporated",
      bio: "eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum"
    },
    {
      id: 10,
      name: "MacKensie Salas",
      title: "Sed Pharetra Felis PC",
      bio: "lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla"
    }
  ]
  
  name! : string;
  title! : string;
  bio! : string;

  agregarPersona : Persona = {
    name : '',
    id : 0,
    bio : '',
    title : ''
  };


  constructor() { }

  ngOnInit(): void {

  }
  
  guardar(){  
    this.persona.push({...this.agregarPersona});
    this.agregarPersona.bio = '';
    this.agregarPersona.name = '';
    this.agregarPersona.title = '';
  }

}
