import { UnidadesListComponent } from '../unidades-list/unidades-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { 
    path: '', 
    component: UnidadesListComponent,
    // children: [
    //     {
    //         path: 'conquistadores',
    //         component: ConquistadoresComponent
    //     }
    // ]
  },
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
export class UnidadesRoutingModule { }
