import { Injectable } from '@nestjs/common';
import { EquipeRepository } from '../repository/Equipe.repository';
import { IEquipe } from '../interface/Participantes.interface';

@Injectable()
export class EquipeService {
  constructor(private readonly repository: EquipeRepository) {}

  async salvarEquipe(equipe: IEquipe) {
    return await this.repository.salvarEquipe(equipe);
  }
}
