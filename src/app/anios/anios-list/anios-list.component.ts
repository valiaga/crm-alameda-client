import { AnioService } from '../shared/anio.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Anio } from '../shared/anio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-anios-list',
  templateUrl: './anios-list.component.html',
  styleUrls: ['./anios-list.component.scss']
})
export class AniosListComponent implements OnInit {

  public anios: FirebaseListObservable<Anio[]>;
  public showSpinner: boolean = true;
  public isActiveModal: boolean = false;

  constructor(private anioService: AnioService) { }

  ngOnInit() {
    this.anios = this.anioService.getAniosList({limitToLast: 10});
    this.anios.subscribe(() => this.showSpinner = false);
  }

  deleteAnios(){
    this.anioService.deleteAll();
    console.log("Click eliminar toda la lista de años.");
  }

  showNuevoAnio(){
    this.isActiveModal = true;
  }

  hideNuevoAnio(){
    this.isActiveModal = false;
  }

}
