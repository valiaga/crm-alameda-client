import { UnidadService } from '../shared/unidad.service';
import { Unidad } from '../shared/unidad';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-unidad-form',
  templateUrl: './unidad-form.component.html',
  styleUrls: ['./unidad-form.component.scss']
})
export class UnidadFormComponent implements OnInit {

  public unidad: Unidad = new Unidad();
  constructor(private unidadService: UnidadService) { }

  ngOnInit() {
  }

  createUnidad(){
    this.unidadService.createUnidad(this.unidad)
    this.unidad = new Unidad() //reset Unidad
  }

}
