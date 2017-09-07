import { AnioService } from './anio.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AniosListComponent } from '../anios-list/anios-list.component';
import { AnioFormComponent } from '../anio-form/anio-form.component';
import { AnioDetailComponent } from '../anio-detail/anio-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    AniosListComponent,
    AnioFormComponent,
    AnioDetailComponent
  ],
  providers: [
    AnioService
  ]
})
export class AnioModule { }
