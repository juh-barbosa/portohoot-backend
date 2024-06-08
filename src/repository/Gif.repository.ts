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
    console.log(gif)
    return this.gifModel.create(gif);
  }
}
