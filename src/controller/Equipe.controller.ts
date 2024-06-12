import { Body, Controller, Get, Post } from "@nestjs/common";
import { EquipeService } from '../service/Equipe.service';
import { IEquipe } from '../interface/Participantes.interface';

@Controller('api/equipe')
export class EquipeController {
  constructor(private readonly service: EquipeService) {}

  @Post('')
  async salvarEquipe(@Body() body: IEquipe) {
    return await this.service.salvarEquipe(body);
  }

  @Get('/podium')
  async getPodium() {
    return await this.service.getPodium();
  }
}
