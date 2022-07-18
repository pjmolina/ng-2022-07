import { Injectable } from '@angular/core';

// interface Logger {
//   log(msg: string): void;
//   warn(msg: string): void;
//   error(msg: string): void;
// }

let counter = 1;

@Injectable({ providedIn: 'root' })
export class LoggerService {
  id: number = 0;

  constructor() {
    this.id = counter;
    console.log('Construido servicio logger: ', counter++);
  }

  log(msg: string): void {
    console.log(msg);
  }
  warn(msg: string): void {
    console.warn(msg);
  }
  error(msg: string): void {
    console.error(msg);
  }
}

@Injectable({ providedIn: 'root' })
export class LoggerV2Service {
  id: number = 0;

  constructor() {
    this.id = counter;
    console.log('Construido servicio loggerV2: ', counter++);
  }
  log(msg: string): void {
    const ts = new Date().toISOString();
    console.log(`${ts}: INFO: ${msg}`);
  }
  warn(msg: string): void {
    const ts = new Date().toISOString();
    console.log(`${ts}: WARN: ${msg}`);
  }
  error(msg: string): void {
    const ts = new Date().toISOString();
    console.log(`${ts}: ERROR: ${msg}`);
  }
}

@Injectable()
export class LoggerMockService {
  log(msg: string): void {}
  warn(msg: string): void {}
  error(msg: string): void {}
}
