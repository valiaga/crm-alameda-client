import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  ////////------------------SOCIAL LOGIN----------------------////////

  signInWithGithub(): void {
    this.auth.githubLogin()
    .then(() => this.afterSignIn());
  }

  signInWithGoogle(): void {
    this.auth.googleLogin()
      .then(() => this.afterSignIn());
  }

  signInWithFacebook(): void {
    this.auth.facebookLogin()
      .then(() => this.afterSignIn());
  }

  signInWithTwitter(): void {
    this.auth.twitterLogin()
      .then(() => this.afterSignIn());
  }

  /////////-------------INGRESAR ANÓNIMO--------------------/////////
  signInAnonymously() {
    this.auth.anonymousLogin()
      .then(() => this.afterSignIn());
  }


  ///-------------------COMPARTIDO------------------------/////////
  private afterSignIn(): void {
    // Haga después de las cosas de inicio de sesión aquí, tales ruteadores redirecciona, mensajes de brindis, etc
    this.router.navigate(['/']);
  }
}
