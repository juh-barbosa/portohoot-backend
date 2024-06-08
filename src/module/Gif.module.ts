import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { GifModelName, GifSchema } from '../schema/Gif.schema';
import { GifController } from '../controller/Gif.controller';
import { GifService } from '../service/Gif.service';
import { GifRepository } from '../repository/Gif.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: GifModelName, schema: GifSchema }]),
    ScheduleModule.forRoot(),
  ],
  controllers: [GifController],
  providers: [GifService, GifRepository],
  exports: [GifRepository],
})
export class GifModule {}
