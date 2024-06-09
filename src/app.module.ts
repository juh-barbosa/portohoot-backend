import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EquipeModule } from './module/Equipe.module';
import { PerguntasModule } from './module/Perguntas.module';
import { GifModule } from './module/Gif.module';
import { TimerModule } from './module/Timer.module';

@Module({
  imports: [
    DatabaseModule,
    EquipeModule,
    PerguntasModule,
    GifModule,
    TimerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
