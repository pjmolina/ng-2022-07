import { Component } from '@angular/core';
import { ChatMessage, ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss'],
})
export class ChatClientComponent {
  name = 'name1';
  error = '';
  message = '';
  chat: ChatMessage[] = [];

  constructor(private chatService: ChatService) {}

  connect(): void {
    this.chatService.connect(this.name);
    this.chatService.chat$.subscribe({
      next: (d) => this.procesar(d),
      error: (e) => this.procesarError(e),
      complete: () => this.seCerroElChat(),
    });
  }

  sendMessage(m: string) {
    this.chatService.sendMessage(this.name, m, 'general');
    this.message = '';
  }

  procesar(d: ChatMessage) {
    this.chat.push(d);
  }
  procesarError(error: any) {
    this.error = error.toString();
  }
  seCerroElChat() {}
}
