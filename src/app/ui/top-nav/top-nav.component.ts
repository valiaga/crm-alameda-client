import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  public show: boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
