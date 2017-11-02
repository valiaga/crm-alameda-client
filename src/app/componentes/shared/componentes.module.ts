import { ConquistadoresComponent } from '../conquistadores/conquistadores.component';
import { UiModule } from '../../ui/shared/ui.module';
// import { UserProfileComponent } from '../../ui/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesListComponent } from '../componentes-list/componentes-list.component';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    ComponentesRoutingModule,
    UiModule
  ],
  declarations: [
    ComponentesListComponent,
    ConquistadoresComponent
    // UserProfileComponent
  ]
})
export class ComponentesModule { }
