import { Controller, Post } from '@nestjs/common';
import { WebSocket } from '../gateway/WebSocket.gateway';

@Controller('/api/release')
export class ReleaseController {
  constructor(private readonly webSocketGateway: WebSocket) {}

  @Post('')
  release() {
    this.webSocketGateway.emitRelease();
    return { message: 'Released' };
  }
}
