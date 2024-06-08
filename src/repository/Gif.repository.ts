import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GifModelName } from '../schema/Gif.schema';
import { GifModel } from '../model/Gif.model';

@Injectable()
export class GifRepository {
  constructor(
    @InjectModel(GifModelName)
    private readonly gifModel: Model<GifModel>,
  ) {}

  async salvarGif(gif: any) {
    return this.gifModel.create(gif);
  }

  async getRandomElement() {
    const count = await this.gifModel.countDocuments().exec();
    const random = Math.floor(Math.random() * count);
    return this.gifModel
      .findOne({ sorteado: false }, { nome: 0, __v: 0, sorteado: 0 })
      .skip(random)
      .exec();
  }

  async alterarSorteado(_id: any) {
    return this.gifModel
      .updateOne({ _id: _id }, { $set: { sorteado: true } })
      .exec();
  }
}
