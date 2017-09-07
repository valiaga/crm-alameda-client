import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    AngularFireAuthModule
  ],
  providers: [AuthService],
  declarations: []
})
export class CoreModule { }
