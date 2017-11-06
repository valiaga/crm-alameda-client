import { Injectable } from '@angular/core';

export abstract class Logger {
  public info: any;
  public warn: any;
  public error: any;  
}

@Injectable()
export class LoggerService implements Logger {

  constructor() { }

  public info: any;
  public warn: any;
  public error: any;

  invokeConsoleMethod(type: string, args?: any): void {}  

}
