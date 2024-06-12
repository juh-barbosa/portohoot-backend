import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PerguntasService } from '../service/Perguntas.service';
import { IPerguntas } from '../interface/Perguntas.interface';

@Controller('api/pergunta')
export class PerguntasController {
  constructor(private readonly service: PerguntasService) {}

  @Post('')
  async salvarPergunta(@Body() body: IPerguntas) {
    return await this.service.salvarPergunta(body);
  }

  @Get('/atual')
  async getPergunta() {
    return await this.service.getPergunta();
  }

  @Put('/responder/:id')
  async responder(@Param('id') id: string, @Body() resposta: any) {
    return await this.service.responder(
      id,
      resposta.timer,
      resposta.equipe,
      resposta.resposta,
    );
  }

  @Put('/pergunta/alterar/:id')
  async alterarStatus(@Param('id') id: string, @Body() status: any) {
    return await this.service.alterarStatus(id, status.status);
  }

  @Put('/liberar')
  async liberarPergunta() {
    return await this.service.liberarPergunta();
  }
}
