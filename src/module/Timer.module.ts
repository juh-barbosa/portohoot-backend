import { Module } from '@nestjs/common';
import { TimerGateway } from '../gateway/Timer.gateway';
import { TimerService } from '../service/Timer.service';

@Module({
  providers: [TimerGateway, TimerService],
})
export class TimerModule {}
