import { Component } from '@angular/core';
import { UserData } from './user/userdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular0';
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
