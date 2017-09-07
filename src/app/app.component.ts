// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';



@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'crm';

  // public unidades$: FirebaseListObservable<any[]>;
  // public formUnidad: FormGroup;

  // constructor(private db: AngularFireDatabase,
  //             private formBuilder: FormBuilder){

  // }
  constructor(){}


  ngOnInit(){
    // this.unidades$ = this.db.list('/unidades');
    // this.initFormUnidad();  
  }

  // onSubmit(){
  //   this.unidades$.push(this.formUnidad.value)
  //     .then(() => console.log("Se ingreso correctamente"))
  //     .catch(err => console.log("Error" + err))
  //   this.initFormUnidad();
  // }

  // getUnidadesList(){

  // }

  // onDelete(key){
  //   this.unidades$.remove(key)
  //     .then(()=>console.log("Se Elimino correctamente"))
  //     .catch(err=>console.log("Error"+err))
  // }

  // initFormUnidad(){
  //   this.formUnidad = this.formBuilder.group({
  //     nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
  //     estado: false
  //   });
  // }
}
