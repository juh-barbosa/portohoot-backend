import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { TimerService } from '../service/Timer.service';

@WebSocketGateway({
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class TimerGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private readonly timerService: TimerService) {}

  handleConnection(client: Socket) {
    const currentTime = this.timerService.getCurrentTime();
    client.emit('timer-update', currentTime);
  }

  @SubscribeMessage('start-timer')
  handleStartTimer(@MessageBody() data: any): void {
    const { duration } = data.data;

    this.timerService.startTimer(duration, (remainingTime) => {
      console.log(remainingTime);
      this.server.emit('timer-update', remainingTime);
    });
  }
}
