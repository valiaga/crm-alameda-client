import { Persona } from '../shared/persona';
import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from "../shared/persona.service";

@Component({
  selector: 'crm-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.scss']
})
export class PersonasListComponent implements OnInit {

  public personas: FirebaseListObservable<Persona[]>;
  public showSpinner: boolean = true;


  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personas = this.personaService.getPersonasList({limitToLast: 10});
    this.personas.subscribe(() => this.showSpinner = false);
  }

  deletePersonas(){
    this.personaService.deleteAll();
    console.log("Click eliminar toda la lista de personas");
  }

}
