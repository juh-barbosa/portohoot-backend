import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EquipeModule } from './module/Equipe.module';
import { PerguntasModule } from './module/Perguntas.module';
import { GifModule } from './module/Gif.module';

@Module({
  imports: [DatabaseModule, EquipeModule, PerguntasModule, GifModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
