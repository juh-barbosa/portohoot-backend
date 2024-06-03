import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { EquipeService } from '../service/Equipe.service';
import { EquipeRepository } from '../repository/Equipe.repository';
import { EquipeController } from '../controller/Equipe.controller';
import { EquipeModelName, EquipeSchema } from '../schema/Equipe.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EquipeModelName, schema: EquipeSchema },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [EquipeController],
  providers: [EquipeService, EquipeRepository],
})
export class EquipeModule {}
