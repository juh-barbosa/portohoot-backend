import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EquipeModule } from './module/Equipe.module';
import { PerguntasModule } from './module/Perguntas.module';
import { GifModule } from './module/Gif.module';
import { WebsocketModule } from './module/Websocket.module';
import { CapsulaModule } from './module/Capsula.module';

@Module({
  imports: [
    DatabaseModule,
    EquipeModule,
    PerguntasModule,
    GifModule,
    WebsocketModule,
    CapsulaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
