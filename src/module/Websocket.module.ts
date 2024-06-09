import { Module } from '@nestjs/common';
import { WebSocket } from '../gateway/WebSocket.gateway';
import { WebsocketService } from '../service/Websocket.service';

@Module({
  providers: [WebSocket, WebsocketService],
})
export class WebsocketModule {}
