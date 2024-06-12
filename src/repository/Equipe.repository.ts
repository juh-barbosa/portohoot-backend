import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EquipeModel } from '../model/Equipe.model';
import { EquipeModelName } from '../schema/Equipe.schema';
import { IEquipe } from '../interface/Participantes.interface';

@Injectable()
export class EquipeRepository {
  constructor(
    @InjectModel(EquipeModelName)
    private readonly equipeModel: Model<EquipeModel>,
  ) {}

  async salvarEquipe(equipe: IEquipe) {
    return this.equipeModel.create(equipe);
  }

  async getPodium() {
    return this.equipeModel
      .find({}, { participantes: 0, __v: 0, _id: 0 })
      .sort({ pontuacao: -1 });
  }

  async getPontuacao(_id) {
    return this.equipeModel.findOne(
      { _id: _id },
      { participantes: 0, __v: 0, _id: 0, icone: 0, nome: 0 },
    );
  }

  async atualizarPontuacao(_id, pontuacao) {
    await this.equipeModel.updateOne(
      { _id: _id },
      { $set: { pontuacao: pontuacao.pontuacao } },
    );
    return this.equipeModel.findById(_id, {
      participantes: 0,
      __v: 0,
      _id: 0,
      icone: 0,
      nome: 0,
    });
  }
}
