import { Injectable } from '@angular/core';
import { loadMessagesSuccess, receivedMessage } from '@app/actions/messages.actions';
import { Message } from '@app/classes/message';
import { Store } from '@ngrx/store';
import { SocketClientService } from './socket-client.service';

@Injectable({
    providedIn: 'root',
})
export class CommunicationService {
    constructor(store: Store, private socketService: SocketClientService) {
        socketService.on('receive message', (message: Message) => {
            store.dispatch(receivedMessage({ message }));
        });
        socketService.on('load messages', (messages: Message[]) => {
            store.dispatch(loadMessagesSuccess({ messages }));
        });
    }

    loadMessages() {
        this.socketService.send('request messages');
    }

    sendMessage(message: Message) {
        this.socketService.send('send message', message);
    }

    resetMessages() {
        this.socketService.send('reset message');
    }
}
