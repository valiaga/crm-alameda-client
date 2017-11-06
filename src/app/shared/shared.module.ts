import { ToastMessagesComponent } from '../ui/toast-messages/toast-messages.component';
import { ToastService } from './services/toast/toast.service';
import { LoggerService } from './services/logger/logger.service';
import { ConsoleLoggerService } from './services/logger/console-logger.service';
import { LoadingSpinnerComponent } from '../ui/loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './services/toast/reverse.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingSpinnerComponent,
    ToastMessagesComponent,
    ReversePipe
  ],
  exports: [
    LoadingSpinnerComponent,
    ToastMessagesComponent
  ],
  providers: [ 
    {provide: LoggerService, useClass: ConsoleLoggerService},
    ToastService
  ]
})
export class SharedModule { }
