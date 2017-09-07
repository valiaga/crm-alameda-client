import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaDetailComponent } from '../persona-detail/persona-detail.component';
import { PersonaFormComponent } from '../persona-form/persona-form.component';
import { SharedModule } from '../../shared/shared.module';
import { PersonasListComponent } from '../personas-list/personas-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaService } from "./persona.service";

@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule

  ],
  declarations: [
    PersonasListComponent,
    PersonaFormComponent,
    PersonaDetailComponent
  ],
  providers: [
    PersonaService
  ]
})
export class PersonaModule { }
