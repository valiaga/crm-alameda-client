import { AniosListComponent } from './anios/anios-list/anios-list.component';
import { PersonasListComponent } from './personas/personas-list/personas-list.component';
import { UnidadesListComponent } from './unidades/unidades-list/unidades-list.component';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReadmePageComponent } from "./ui/readme-page/readme-page.component";

const routes: Routes = [
  { path: '', component: ReadmePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'unidades', component: UnidadesListComponent },
  { path: 'personas', component: PersonasListComponent },
  { path: 'anios', component: AniosListComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)    
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
