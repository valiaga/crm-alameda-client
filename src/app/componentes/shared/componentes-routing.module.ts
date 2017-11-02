import { ConquistadoresComponent } from '../conquistadores/conquistadores.component';
import { ComponentesListComponent } from '../componentes-list/componentes-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { 
    path: '', 
    component: ComponentesListComponent,
    // children: [
    //     {
    //         path: 'conquistadores',
    //         component: ConquistadoresComponent
    //     }
    // ]
  },
  {
    path: 'conquistadores',
    component: ConquistadoresComponent,
    children: [
      {
        path: 'personas',
        loadChildren: '../../personas/shared/persona.module#PersonaModule'
      },
      {
        path: 'unidades',
        loadChildren: '../../unidades/shared/unidad.module#UnidadModule'
      }
    ]
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
export class ComponentesRoutingModule { }
