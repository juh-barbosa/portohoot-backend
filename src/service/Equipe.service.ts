import { Injectable } from '@nestjs/common';
import { EquipeRepository } from '../repository/Equipe.repository';
import { IEquipe } from '../interface/Participantes.interface';
import { GifRepository } from '../repository/Gif.repository';

@Injectable()
export class EquipeService {
  constructor(
    private readonly repository: EquipeRepository,
    private readonly gifRepository: GifRepository,
  ) {}

  async salvarEquipe(equipe: IEquipe) {
    const gif = await this.gifRepository.getRandomElement();
    equipe = { ...equipe, icone: gif['base64'] };
    await this.gifRepository.alterarSorteado(gif['_id']);

    return await this.repository.salvarEquipe(equipe);
  }

  async getPodium() {
    return await this.repository.getPodium();
  }
}
