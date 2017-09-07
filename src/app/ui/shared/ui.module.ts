import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ReadmePageComponent } from '../readme-page/readme-page.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    //Formularios
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    UserLoginComponent,
    UserProfileComponent,
    TopNavComponent,
    FooterNavComponent,
    UserFormComponent,
    ReadmePageComponent
  ],
  exports: [
    TopNavComponent,
    FooterNavComponent,
    UserProfileComponent
  ]
})
export class UiModule { }
