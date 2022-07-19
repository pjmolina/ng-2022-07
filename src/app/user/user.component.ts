import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { UserData } from './userdata';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [
    // LoggerService, // bypass
    //{ provide: LoggerService, useClass: LoggerV2Service },
  ],
})
export class UserComponent implements OnInit, OnDestroy, OnChanges {
  // age: number = 0;

  // Ejemplo de setter/getter : age
  private _age: number = 0;

  set age(v: number) {
    if (v !== this._age) {
      this._age = v;
      console.log('escritura', v);
      // this.ageChanged.emit();
    } else {
      // nada
    }
  }
  get age(): number {
    console.log('lectura', this._age);
    return this._age;
  }

  @Input() user: UserData = {
    name: '',
    surname: '',
  };
  @Output() userSelected = new EventEmitter<UserData>();

  constructor(private logger: LoggerService) {
    logger.log('Componente construyendose...');
  }

  ngOnInit(): void {
    this.logger.log('Componente inicializandose...');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log('Componente con cambios:' + JSON.stringify(changes));
  }

  ngOnDestroy(): void {
    this.logger.log('Componente destruye...');
  }

  pulsado(): void {
    this.logger.log('Boton pulsado ' + this.user.name);

    this.userSelected.emit({
      name: this.user.name,
      surname: this.user.surname,
    });
  }
}
