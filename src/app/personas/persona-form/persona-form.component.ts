import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../shared/persona';
import { PersonaService } from '../shared/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.scss']
})
export class PersonaFormComponent implements OnInit {
  public persona: Persona = new Persona();
  private personaForm: FormGroup
  constructor(private personaService: PersonaService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cargarMaestros();
    this.builForm();
  }

  createPersona(){
    this.personaService.createPersona(this.persona)
    this.persona = new Persona() //reset Persona
  }

  cargarMaestros(){
    // Cargar Combos para el formulario
  }

  builForm(){
    const fechaActual = new Date(Date.now());
    const fechaPasada = new Date(Date.now());
    const fechaFutura = new Date(Date.now());

    this.personaForm = this.formBuilder.group({
      nombres: [[], Validators.required],
      ap_paterno: [[], Validators.required],
      ap_materno: [[], Validators.required],
      num_doc: [[], [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      celular: [[], Validators.required],
      email: [[], [Validators.required, Validators.email]],
      // sexo: [[], Validators.required],
      observaciones: []
    })
  }

}
