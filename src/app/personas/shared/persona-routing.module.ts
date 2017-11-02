import { PersonaFormComponent } from '../persona-form/persona-form.component';
import { PersonasListComponent } from '../personas-list/personas-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
    component: PersonaFormComponent
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
