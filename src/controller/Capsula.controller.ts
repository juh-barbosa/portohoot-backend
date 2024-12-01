import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CapsulaService } from '../service/Capsula.service';

@Controller('api/capsula')
export class CapsulaController {
  constructor(private readonly service: CapsulaService) {}

  @Post('')
  async salvarMensagem(@Body() body: any) {
    return this.service.encrypt(body.email, body.mensagem);
  }

  @Get(`email`)
  async getEmail() {
    return await this.service.getEmails();
  }

  @Put('email/validate')
  async validateEmail(@Body() body: any) {
    return await this.service.validateEmail(body.email, body.password);
  }

  @Put('')
  async getMessage(@Body() body: any) {
    return this.service.decrypt(body._id);
  }
}
