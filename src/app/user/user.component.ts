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
import { UserData } from './userdata';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy, OnChanges {
  @Input() user: UserData = {
    name: '',
    surname: '',
  };
  @Output() userSelected = new EventEmitter<UserData>();

  constructor() {
    console.log('Componente construyendose...');
  }

  ngOnInit(): void {
    console.log('Componente inicializandose...');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente con cambios:', changes);
  }

  ngOnDestroy(): void {
    console.log('Componente destruye...');
  }

  pulsado(): void {
    console.log('Boton pulsado ', this.user.name);

    this.userSelected.emit({
      name: this.user.name,
      surname: this.user.surname,
    });
  }
}
