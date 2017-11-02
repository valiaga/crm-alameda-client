import { SharedModule } from '../../shared/shared.module';
import { UnidadDetailComponent } from '../unidad-detail/unidad-detail.component';
import { UnidadFormComponent } from '../unidad-form/unidad-form.component';
import { UnidadesListComponent } from '../unidades-list/unidades-list.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UnidadService } from './unidad.service';
import { NgModule } from '@angular/core';
import { UnidadesRoutingModule } from "./unidades-routing.module";

@NgModule({
    imports: [
        CommonModule,

        SharedModule,

        ReactiveFormsModule,
        FormsModule,
        AngularFireDatabaseModule,
        UnidadesRoutingModule
    ],
    declarations: [
        UnidadesListComponent,
        UnidadFormComponent,
        UnidadDetailComponent
    ],
    // exports: [],
    providers: [
        UnidadService
    ]
})
export class UnidadModule{}