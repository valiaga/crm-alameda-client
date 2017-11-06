import { style } from '@angular/animations';
import { ToastService } from '../../shared/services/toast/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-toast-messages',
  template: `
  <div class="wrapper">
    <aside  *ngFor="let message of messages | async | reverse">
      <div class="notification"
          [ngClass]="{'is-info':     message.style=='info',
                      'is-danger':   message.style=='danger',
                      'is-success':  message.style=='success'}">
        <button class="delete" (click)="dismiss(message.$key)"></button>
        {{message.content}}
      </div>
    </aside>
  </div>
  `,
  styles: [`
  .wrapper {
    position: absolute;
    right: 20px;
    top: 70px;
  }
  `]
})
export class ToastMessagesComponent implements OnInit {

  messages: any;

  constructor(private toast: ToastService) { }

  ngOnInit() {
    this.messages = this.toast.getMessages()
  }

  dismiss(itemKey) {
    this.toast.dismissMessage(itemKey)
  }

}
