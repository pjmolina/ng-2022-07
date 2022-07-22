import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface ChatMessage {
  message: string;
  from: string;
  ts: Date;
  channel: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  mensajes: ChatMessage[] = [];

  chat$!: Observable<ChatMessage>;

  private fuente = new Subject<ChatMessage>();

  constructor() {
    this.chat$ = this.fuente.asObservable();
  }

  connect(name: string) {
    this.fuente.next({
      message: `${name} se ha conectado.`,
      from: 'system',
      ts: new Date(),
      channel: 'general',
    });
  }
  disconnect(name: string) {
    this.fuente.next({
      message: `${name} se ha desconectado.`,
      from: 'system',
      ts: new Date(),
      channel: 'general',
    });
  }
  sendMessage(
    from: string,
    message: string,
    channel: string = 'general'
  ): void {
    this.fuente.next({
      //message: message,
      message,
      from,
      ts: new Date(),
      channel,
    });
  }
}
