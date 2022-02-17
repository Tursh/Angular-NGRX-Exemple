import { Message } from '@app/message';
import * as io from 'socket.io';
import { Service } from 'typedi';

@Service()
export class CommunicationService {
    messages: Message[] = [];

    setupSocketConnection(socket: io.Socket) {
        socket.on('request messages', () => {
            socket.emit('load messages', this.messages);
        });
        socket.on('send message', (message: Message) => {
            this.messages.push(message);
            socket.emit('receive message', message);
        });
        socket.on('reset message', () => {
            this.messages = [];
            socket.emit('load messages', this.messages);
        });
    }
}
