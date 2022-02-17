import * as http from 'http';
import * as io from 'socket.io';
import { CommunicationService } from './communication.service';

export class SocketManager {
    private sio: io.Server;
    constructor(server: http.Server, private communicationService: CommunicationService) {
        this.sio = new io.Server(server, { cors: { origin: '*', methods: ['GET', 'POST'] } });
        this.handleSockets();
    }

    handleSockets(): void {
        this.sio.on('connection', (socket) => {
            this.communicationService.setupSocketConnection(socket);
        });
    }
}
