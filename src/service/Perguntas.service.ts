import { Injectable } from '@nestjs/common';
import { PerguntasRepository } from '../repository/Perguntas.repository';
import { IPerguntas } from '../interface/Perguntas.interface';
import { EquipeRepository } from '../repository/Equipe.repository';

@Injectable()
export class PerguntasService {
  constructor(
    private readonly repository: PerguntasRepository,
    private readonly equipeRepository: EquipeRepository,
  ) {}

  async salvarPergunta(pergunta: IPerguntas) {
    return await this.repository.salvarPergunta(pergunta);
  }

  async getPergunta() {
    return await this.repository.getPergunta();
  }

  async responder(_id, timer: any, equipe, equipe_resposta) {
    const pontuacao = await this.equipeRepository.getPontuacao(equipe);
    const resposta: any = await this.repository.correta(_id);

    if (equipe_resposta == resposta.correta) {
      pontuacao.pontuacao += timer;
      return await this.equipeRepository.atualizarPontuacao(equipe, pontuacao);
    }

    return pontuacao.pontuacao;
  }

  async alterarStatus(id, status) {
    return this.repository.alterarStatus(id, status);
  }

  async liberarPergunta() {
    return this.repository.liberarPergunta();
  }
}
