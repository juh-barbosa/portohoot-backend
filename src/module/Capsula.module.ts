import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { CapsulaModelName, CapsulaSchema } from '../schema/Capsula.schema';
import { CapsulaController } from '../controller/Capsula.controller';
import { CapsulaService } from '../service/Capsula.service';
import { CapsulaRepository } from '../repository/Capsula.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CapsulaModelName, schema: CapsulaSchema },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [CapsulaController],
  providers: [CapsulaService, CapsulaRepository],
})
export class CapsulaModule {}