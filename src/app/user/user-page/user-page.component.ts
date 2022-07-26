import { Component } from '@angular/core';
import { UserData } from '../userdata';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent {
  nombreSeleccionado?: string;
  searchText = '';

  usuarios: UserData[] = [
    { name: 'Maria', surname: 'Garcia' },
    { name: 'Ana', surname: 'Lopez' },
    { name: 'Pepe', surname: 'Gutierrez' },
    { name: 'Pablo', surname: 'Molina' },
  ];

  usuarioSeleccionado(user: UserData): void {
    // this.nombreSeleccionado = user.name + ' ' + user.surname;
    this.nombreSeleccionado = `${user.name} ${user.surname}`;
  }
}
