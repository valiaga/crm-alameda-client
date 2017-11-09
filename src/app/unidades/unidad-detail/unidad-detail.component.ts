import { UnidadService } from '../shared/unidad.service';
import { Unidad } from '../shared/unidad';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'crm-unidad-detail',
  templateUrl: './unidad-detail.component.html',
  styleUrls: ['./unidad-detail.component.scss']
})
export class UnidadDetailComponent implements OnInit {

  // @Input() unidad: Unidad;

  constructor(private unidadService: UnidadService) { }

  ngOnInit() {
  }

  // updateNombre(){
  //   this.unidadService.updateUnidad(this.unidad.$key, { nombre: 'Nuevo Nombre'})
  // }

  // deleteUnidad(){
  //   this.unidadService.deleteUnidad(this.unidad.$key);
  // }

}
