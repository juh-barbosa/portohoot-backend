import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WebsocketService } from '../service/Websocket.service';

@WebSocketGateway({
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class WebSocket implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private readonly timerService: WebsocketService) {}

  handleConnection(client: Socket) {
    const currentTime = this.timerService.getCurrentTime();
    client.emit('timer-update', currentTime);
  }

  @SubscribeMessage('start-timer')
  handleStartTimer(@MessageBody() data: any): void {
    const { duration } = data.data;

    this.timerService.startTimer(duration, (remainingTime) => {
      this.server.emit('timer-update', remainingTime);
    });
  }

  emitRelease(): void {
    this.server.emit('release');
  }
}
