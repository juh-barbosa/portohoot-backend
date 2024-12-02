import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CapsulaModelName,
  CapsulaModelNameBackup,
} from '../schema/Capsula.schema';
import { CapsulaModel, CapsulaModelBackup } from '../model/Capsula.model';

export class CapsulaRepository {
  constructor(
    @InjectModel(CapsulaModelName)
    private readonly capsulaModel: Model<CapsulaModel>,

    @InjectModel(CapsulaModelNameBackup) // Adicione esta linha para injetar o backup
    private readonly capsulaModalBackup: Model<CapsulaModelBackup>,
  ) {}

  async salvarMensagem(email: any, mensagem: any, iv: any) {
    return this.capsulaModel.create({
      email: email,
      mensagem: mensagem,
      iv: iv,
    });
  }

  async salvarMensagemNova(email: any, mensagem: any, iv: any) {
    return this.capsulaModalBackup.create({
      email: email,
      mensagem: mensagem,
      iv: iv,
    });
  }

  async recuperar(_id: any) {
    return this.capsulaModel.find({ _id: _id }, { _id: 0 });
  }

  async getAllMessagesAndEmails() {
    return this.capsulaModel.aggregate([
      {
        $group: {
          _id: '$email',
          messages: { $push: '$mensagem' },
          iv: { $push: '$iv' },
        },
      },
      {
        $project: {
          _id: 0,
          email: '$_id',
          messages: 1,
          iv: 1,
        },
      },
    ]);
  }

  async getEmails() {
    return this.capsulaModel.find({}, { _id: 0, __v: 0, iv: 0, mensagem: 0 });
  }

  async validateEmail(email): Promise<any> {
    return this.capsulaModel.find(
      { email: email },
      { __v: 0, iv: 0, email: 0, mensagem: 0 },
    );
  }
}
