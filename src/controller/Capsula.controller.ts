import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CapsulaService } from '../service/Capsula.service';

@Controller('api/capsula')
export class CapsulaController {
  constructor(private readonly service: CapsulaService) {}

  @Post('')
  async salvarMensagem(@Body() body: any) {
    return this.service.encrypt(body.email, body.mensagem);
  }

  @Put('')
  async recuperarMensagem(@Body() body: any) {
    return this.service.decrypt(body.email);
  }
}
