import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BingoNumber, BingoService } from './bingo.service';

@Component({
  selector: 'app-bingo-client',
  templateUrl: './bingo-client.component.html',
  styleUrls: ['./bingo-client.component.scss'],
  providers: [BingoService],
})
export class BingoClientComponent {
  ultimosNumeros: BingoNumber[] = [];
  sub?: Subscription;
  dentro = false;
  message = '';

  constructor(private bingoService: BingoService) {}

  entrar(): void {
    this.sub = this.bingoService.bingo$.subscribe({
      next: (nb) => {
        this.procesarNuevoNumero(nb);
        this.message = 'Bingo en marcha...';
        console.log(nb);
      },
      error: (err) => {
        this.message = 'Error: ' + err.toString();
      },
      complete: () => {
        this.message = 'Bingo cerrado';
      },
    });
    this.dentro = true;
  }
  salir(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = undefined;
    }
    this.dentro = false;
    this.ultimosNumeros = [];
  }

  parar(): void {
    this.bingoService.stop();
  }

  procesarNuevoNumero(nb: BingoNumber): void {
    this.ultimosNumeros.push(nb);
  }
}
