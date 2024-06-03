import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { PerguntasModelName, PerguntasSchema } from '../schema/Pergunta.schema';
import { PerguntasController } from '../controller/Perguntas.controller';
import { PerguntasService } from '../service/Perguntas.service';
import { PerguntasRepository } from '../repository/Perguntas.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PerguntasModelName, schema: PerguntasSchema },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [PerguntasController],
  providers: [PerguntasService, PerguntasRepository],
})
export class PerguntasModule {}
