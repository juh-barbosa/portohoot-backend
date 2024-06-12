import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { PerguntasModelName, PerguntasSchema } from '../schema/Pergunta.schema';
import { PerguntasController } from '../controller/Perguntas.controller';
import { PerguntasService } from '../service/Perguntas.service';
import { PerguntasRepository } from '../repository/Perguntas.repository';
import { EquipeModelName, EquipeSchema } from '../schema/Equipe.schema';
import { EquipeRepository } from '../repository/Equipe.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PerguntasModelName, schema: PerguntasSchema },
      { name: EquipeModelName, schema: EquipeSchema },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [PerguntasController],
  providers: [PerguntasService, PerguntasRepository, EquipeRepository],
})
export class PerguntasModule {}
