import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router) {

                this.afAuth.authState.subscribe(auth => {
                  this.authState = auth;
                })
               }

  // Retorna true si el usuario esta logeado
  get authenticated(): boolean{
    return this.authState !==null;
  }

  // Retorna los datos del usuario actuales
  get currentUser(): any{
    return this.authenticated ? this.authState : null;
  }

  // Returns.
  get currentUserObservable(): any{
    return this.afAuth.authState;
  }

  // Returns.
  get currentUserId(): string{
    return this.authenticated ? this.authState.uid : '';
  }

  // Usuario an+ómino.
  get currentUserAnonymous(): boolean{
    return this.authenticated ? this.authState.isAnonymus : false;
  }

  // retorna el nombre del usuario actual o invitado.
  get currentUserDisplayName(): string{
    if(!this.authState){
      return 'Invitado';
    }else if(this.currentUserAnonymous){
      return 'Anónimo';
    }else{
      return this.authState['displayName'] || 'Usuario sin mombre';
    }
  }

  ////////---------------SOCIAL AUTH -------------////////

  /**
   * Social auth con GitHub.
   */
  githubLogin(){
    const provider = new firebase.auth.GithubAuthProvider();
    return this.socialSignIn(provider);
  }

  /**
   * Social auth con Google
   */
  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  /**
   * Social auth con facebook.
   */
  facebookLogin(){
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  /**
   * Social auth con Twitter
   */
  twitterLogin(){
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider){
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credential => {
        this.authState = credential.user;
        this.updateUserData()
      })
      .catch(error => console.log("error: ", error))
  }

  /**
   * Anonimo auth
   */
  anonymousLogin(){
    return this.afAuth.auth.signInAnonymously()
      .then(user => {
        this.authState = user;
      })
      .catch(error => console.log("error: ", error))
  }
  
  ////////---------------EMAIL/PASSWORD AUTH------------////////

  /**
   * Registro y logeo.
   * @param email 
   * @param password 
   */
  emailSignUp(email: string, password: string){
    // return this.afAuth.auth.
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        this.updateUserData();
      })
      .catch(error => console.log("error: ", error));
  }

  /**
   * Logeo
   * @param email 
   * @param password 
   */
  emailLogin(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        this.updateUserData();
      })
      .catch(error => console.log("error: ", error))
  }

  /**
   * Cambiar contraseña
   * @param email 
   */
  resetPassword(email: string){
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(()=> console.log("Email Enviado"))
      .catch(error => console.log("error: ",error))
  }

  /////// ------------------- CERRAR SESION------------------///////

  /**
   * Cerrar sesion
   */
  signOut():void{
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  /////// ------------------- AYUDAS------------------///////
  
  /**
   * Editar data del usuario.
   */
  private updateUserData():void{
    // Escribe el nombre de usuario y el correo electrónico en db en tiempo real.
    // útil si la aplicación muestra información sobre los usuarios o sobre las funciones de administración

    const path = `users/${this.currentUserId}`;
    const data = {
      email: this.authState.email,
      name: this.authState.displayName
    }

    this.db.object(path).update(data)
      .catch(error => console.log("error: ", error))
  }
}
