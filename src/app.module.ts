import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EquipeModule } from './module/Equipe.module';
import { PerguntasModule } from './module/Perguntas.module';

@Module({
  imports: [DatabaseModule, EquipeModule, PerguntasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
