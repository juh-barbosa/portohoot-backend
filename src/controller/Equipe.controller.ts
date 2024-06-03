import { Body, Controller, Post } from '@nestjs/common';
import { EquipeService } from '../service/Equipe.service';
import { IEquipe } from '../interface/Participantes.interface';

@Controller('api/equipe')
export class EquipeController {
  constructor(private readonly service: EquipeService) {}

  @Post('')
  async salvarEquipe(@Body() body: IEquipe) {
    return await this.service.salvarEquipe(body);
  }
}
