import { PersonaService } from '../shared/persona.service';
import { Persona } from '../shared/persona';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'crm-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.scss']
})
export class PersonaDetailComponent implements OnInit {

  @Input() persona: Persona;

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
  }

  updateNombre(){
    this.personaService.updatePersona(this.persona.$key, { nombres: 'Nuevo Nombre de persona'})
  }

  deletePersona(){
    this.personaService.deletePersona(this.persona.$key);
  }

}
