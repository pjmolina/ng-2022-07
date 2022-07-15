import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() name = '';
  @Input() surname = '';
  @Output() userSelected = new EventEmitter<string>();

  pulsado(): void {
    console.log('Boton pulsado ', this.name);

    this.userSelected.emit(this.name);
  }
}
