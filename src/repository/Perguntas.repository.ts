import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PerguntasModelName } from '../schema/Pergunta.schema';
import { PerguntasModel } from '../model/Perguntas.model';
import { IPerguntas } from '../interface/Perguntas.interface';

@Injectable()
export class PerguntasRepository {
  constructor(
    @InjectModel(PerguntasModelName)
    private readonly perguntasModel: Model<PerguntasModel>,
  ) {}

  async salvarPergunta(pergunta: IPerguntas) {
    return this.perguntasModel.create(pergunta);
  }
}
