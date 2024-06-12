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

  async getPergunta() {
    return this.perguntasModel.findOne(
      { status: 1 },
      { __v: 0, status: 0 },
    );
  }

  async correta(_id) {
    return this.perguntasModel.findOne(
      { _id: _id },
      { pergunta: 0, respostas: 0, _id: 0, __v: 0, status: 0 },
    );
  }

  async alterarStatus(_id, status) {
    return this.perguntasModel.updateOne({ _id: _id }, { status: status });
  }

  async liberarPergunta() {
    return this.perguntasModel.updateOne(
      { status: 0 },
      { status: 1 }
    );
  }
}
