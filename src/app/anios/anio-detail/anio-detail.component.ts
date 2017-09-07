import { AnioService } from '../shared/anio.service';
import { Anio } from '../shared/anio';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'crm-anio-detail',
  templateUrl: './anio-detail.component.html',
  styleUrls: ['./anio-detail.component.scss']
})
export class AnioDetailComponent implements OnInit {

  @Input() anio: Anio;

  constructor(private anioService: AnioService) { }

  ngOnInit() {
  }

  updateNombre(){
    this.anioService.updateAnio(this.anio.$key, { nombre: 'Nuevo Nombre'})
  }

  deleteUnidad(){
    this.anioService.deleteAnio(this.anio.$key);
  }

}
