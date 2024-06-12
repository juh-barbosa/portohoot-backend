import { Module } from '@nestjs/common';
import { WebSocket } from '../gateway/WebSocket.gateway';
import { WebsocketService } from '../service/Websocket.service';
import { ReleaseController } from '../controller/Websocket.controller';

@Module({
  providers: [WebSocket, WebsocketService],
  controllers: [ReleaseController],
})
export class WebsocketModule {}
