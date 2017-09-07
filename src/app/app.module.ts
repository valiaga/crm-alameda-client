import { AnioModule } from './anios/shared/anio.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Mis modulos
import { UnidadModule } from './unidades/shared/unidad.module';
import { PersonaModule } from './personas/shared/persona.module';

import { UiModule } from './ui/shared/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebase; 

//importamos el módulo de formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // ReactiveFormsModule,
    // FormsModule,

    AppRoutingModule,
    CoreModule,
    SharedModule,
    UnidadModule,
    PersonaModule,
    AnioModule,
    UiModule,

    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
