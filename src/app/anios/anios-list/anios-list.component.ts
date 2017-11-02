import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnioService } from '../shared/anio.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Anio } from '../shared/anio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-anios-list',
  templateUrl: './anios-list.component.html',
  styleUrls: ['./anios-list.component.scss']
})
export class AniosListComponent implements OnInit {

  public anios: FirebaseListObservable<Anio[]>;
  public showSpinner: boolean = true;
  public isActiveModal: boolean = false;

  public anioForm: FormGroup;

  constructor(private anioService: AnioService,
            private fb: FormBuilder) { }

  ngOnInit() {
    this.anios = this.anioService.getAniosList({limitToLast: 10});
    this.anios.subscribe(() => this.showSpinner = false);
  }

  deleteAnios(){
    this.anioService.deleteAll();
    console.log("Click eliminar toda la lista de años.");
  }

  showNuevoAnio(){
    this.isActiveModal = true;
  }

  hideNuevoAnio(){
    this.isActiveModal = false;
  }

  buildForm(): void {
    this.anioForm = this.fb.group({
      'nombre': ['', [
          Validators.required
          // Validators.email
        ]
        ],
          'activo': ['', [
          // Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          // Validators.minLength(6),
          // Validators.maxLength(25)
        ]
      ],
    });

    this.anioForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

    // Updates validation state on form changes.
  onValueChanged(data?: any) {
    if (!this.anioForm) { return; }
    const form = this.anioForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'nombre': '',
    'activo': ''
  };


  validationMessages = {
    'nombre': {
      'required':      'Email is required.',
      // 'email':         'Email must be a valid email'
    },
    'activo': {
      // 'required':      'Password is required.',
      // 'pattern':       'Password must be include at one letter and one number.',
      // 'minlength':     'Password must be at least 4 characters long.',
      // 'maxlength':     'Password cannot be more than 40 characters long.',
    }
  };

}
