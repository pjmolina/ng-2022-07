import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular0';
  nombreSeleccionado?: string;

  usuarioSeleccionado(nuevoNombre: string): void {
    this.nombreSeleccionado = nuevoNombre;
  }
}
