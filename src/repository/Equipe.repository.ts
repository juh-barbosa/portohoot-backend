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
}
