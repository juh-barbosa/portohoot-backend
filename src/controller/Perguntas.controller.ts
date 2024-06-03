import { Body, Controller, Post } from '@nestjs/common';
import { PerguntasService } from '../service/Perguntas.service';
import { IPerguntas } from '../interface/Perguntas.interface';

@Controller('api/pergunta')
export class PerguntasController {
  constructor(private readonly service: PerguntasService) {}

  @Post('')
  async salvarPergunta(@Body() body: IPerguntas) {
    return await this.service.salvarPergunta(body);
  }
}
