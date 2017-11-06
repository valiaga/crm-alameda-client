import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../../shared/services/toast/toast.service';
import { LoggerService } from '../../shared/services/logger/logger.service';
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
  // public $persona: FirebaseObjectObservable<Persona>;
  private personaForm: FormGroup;

  private nuevaPersona: boolean;
  private titulo: string;
  public showSpinner: boolean = true;

  constructor(private personaService: PersonaService,
              private formBuilder: FormBuilder,
              private logger: LoggerService,
              private toast: ToastService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.cargarMaestros();
  }
  
  onSubmit(){
    this.persona = this.personaForm.value;
    const valid = this.personaForm.valid;

    if(valid){
      this.logger.info(this.persona);
      if(this.persona.$key){
        this.logger.info('UNDATE')
        
        this.personaService.updatePersona(this.persona.$key, this.persona)
          .then(msg => {
            const dataShow = this.persona.nombres + ' ' + this.persona.ap_paterno + ' ' + this.persona.ap_materno;
            this.sendMessage(dataShow);
          })
          .catch(err => {
            this.logger.error(err);            
          })
      }
      else{
        this.logger.info('NEW')
        this.personaService.createPersona(this.persona)
          .then(msg => {
            const dataShow = this.persona.nombres + ' ' + this.persona.ap_paterno + ' ' + this.persona.ap_materno;
            this.sendMessage(dataShow);
            this.builForm();
          })
          .catch(err => {
            this.logger.error(err);
          });
        }
        
    }
  }

  sendMessage(dataShow){
    const message = 'La operacion se realizo con Éxito: ' + dataShow;
    this.toast.sendMessage(message, 'info');
  }

  cargarMaestros(){
    // Cargar Combos para el formulario
    // this.nuevaPersona = this.route.snapshot.data['nuevaPersona'];
    // this.titulo = this.route.snapshot.data['titulo'];
    this.route.params.subscribe(params => {
      const key = params['key'];
      if (key){
        this.loadPersonaEdit(key.toString());
      }else{
        this.builForm();
      }
    });
  }
  
  loadPersonaEdit(key){
    this.personaService.getPersonaByKey(key)
      .subscribe(p => {
      this.persona = p;
      this.builForm();
    })
  }
  
  initializeControls(){
    const controls = {
      $key: [
        this.persona.$key
      ],
      nombres: [
        this.persona.nombres,
        Validators.required
      ],
      ap_paterno: [
        this.persona.ap_paterno,
        Validators.required
      ],
      ap_materno: [
        this.persona.ap_materno,
        Validators.required
      ],
      num_doc: [
        this.persona.num_doc,
        [
          Validators.required,
          Validators.minLength(8), Validators.maxLength(8)
        ]
      ],
      celular: [
        this.persona.celular,
        Validators.required
      ],
      email: [
        this.persona.email,
        [Validators.required, Validators.email]
      ],
      sexo: [
        this.persona.sexo,
        Validators.required
      ],
      direccion: [
        this.persona.direccion
      ]
    }
    return controls;

  }

  builForm(){
    const controls = this.initializeControls();
    this.personaForm = this.formBuilder.group(controls);
    this.showSpinner = false;
  }
}
