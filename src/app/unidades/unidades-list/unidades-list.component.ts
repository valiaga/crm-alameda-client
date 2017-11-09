import { Unidad } from '../shared/unidad';
import { FirebaseListObservable } from 'angularfire2/database';
import { UnidadService } from '../shared/unidad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-unidades-list',
  templateUrl: './unidades-list.component.html',
  styleUrls: ['./unidades-list.component.scss'],
})
export class UnidadesListComponent implements OnInit {

  public unidades: FirebaseListObservable<Unidad[]>;
  public showSpinner: boolean = true;

  constructor(private unidadService: UnidadService) { }

  ngOnInit() {
    this.unidades = this.unidadService.getUnidadesList({limitToLast: 10});
    this.unidades.subscribe(() => this.showSpinner = false);
  }

  deleteUnidades(){
    this.unidadService.deleteAll();
    console.log("Click eliminar toda la lista");
  }

  // updateNombre(){
  //   this.unidadService.updateUnidad(this.unidad.$key, { nombre: 'Nuevo Nombre'})
  // }

  deleteUnidad($key){
    this.unidadService.deleteUnidad($key);
  }

}
