import { Injectable } from '@nestjs/common';
import { PerguntasRepository } from '../repository/Perguntas.repository';
import { IPerguntas } from '../interface/Perguntas.interface';

@Injectable()
export class PerguntasService {
  constructor(private readonly repository: PerguntasRepository) {}

  async salvarPergunta(pergunta: IPerguntas) {
    return await this.repository.salvarPergunta(pergunta);
  }
}
