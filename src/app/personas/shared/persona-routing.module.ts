import { PersonaFormComponent } from '../persona-form/persona-form.component';
import { PersonasListComponent } from '../personas-list/personas-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


/** Rutas que se manejan en este módulo
 * /personas
 * /personas/nuevo
 * /personas/lista
 * /personas/42
 */
const routes: Routes = [
  { 
    path: '', 
    component: PersonasListComponent,
    children: [
        // {
        //     path: 'nuevo',
        //     component: NuevoComponent
        // }
    ]
  },
  {
    path: 'nuevo',
    component: PersonaFormComponent,
    data: {
      nuevaPersona: true,
      titulo: 'Registro'
    }
  },
  {
    path: ':key', // parámetro variable id
    component: PersonaFormComponent,
    data: {
      nuevaPersona: false,
      titulo: 'Persona'
    }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)    
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class PersonaRoutingModule { }
