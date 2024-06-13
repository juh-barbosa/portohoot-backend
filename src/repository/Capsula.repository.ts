import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CapsulaModelName } from '../schema/Capsula.schema';
import { CapsulaModel } from '../model/Capsula.model';

export class CapsulaRepository {
  constructor(
    @InjectModel(CapsulaModelName)
    private readonly capsulaModel: Model<CapsulaModel>,
  ) {}

  async salvarMensagem(email: any, mensagem: any, iv: any) {
    return this.capsulaModel.create({
      email: email,
      mensagem: mensagem,
      iv: iv,
    });
  }

  async recuperar(email: any) {
    console.log(email)
    return this.capsulaModel.findOne({ email: email }, { _id: 0 });
  }
}
