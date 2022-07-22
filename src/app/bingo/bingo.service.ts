import { Injectable } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs';

export interface BingoNumber {
  number: number;
  ts: Date;
  gameId: string;
  historico: number[];
}

@Injectable({ providedIn: 'root' })
export class BingoService {
  private fuente!: Subject<BingoNumber>;
  private sub?: Subscription;
  private historico: number[] = [];

  bingo$!: Observable<BingoNumber>;

  constructor() {
    this.init();
  }

  init() {
    // Subject -> Pubish
    // ReplaySubject 3    4000ms
    // AsyncSubject

    this.fuente = new Subject<BingoNumber>();

    this.sub = interval(3000).subscribe({
      next: () => {
        const rnd = +(Math.random() * 100).toFixed(0);
        this.historico.push(rnd);
        this.fuente.next({
          number: rnd,
          ts: new Date(),
          gameId: 'g67',
          historico: this.historico,
        });
        console.log('Generado numero:', rnd, new Date().toISOString());
      },
    });
    this.bingo$ = this.fuente.asObservable();
  }

  stop(): void {
    if (this.sub) {
      this.sub?.unsubscribe();
      this.sub = undefined;
      this.fuente.complete();
    }
  }
}
