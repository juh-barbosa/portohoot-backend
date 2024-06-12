import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { EquipeService } from '../service/Equipe.service';
import { EquipeRepository } from '../repository/Equipe.repository';
import { EquipeController } from '../controller/Equipe.controller';
import { EquipeModelName, EquipeSchema } from '../schema/Equipe.schema';
import { GifRepository } from '../repository/Gif.repository';
import { GifModelName, GifSchema } from '../schema/Gif.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EquipeModelName, schema: EquipeSchema },
      { name: GifModelName, schema: GifSchema },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [EquipeController],
  providers: [EquipeService, EquipeRepository, GifRepository],
  exports: [EquipeRepository],
})
export class EquipeModule {}
