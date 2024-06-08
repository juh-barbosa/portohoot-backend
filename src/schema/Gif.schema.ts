import { Schema } from 'mongoose';
import { GifModel } from '../model/Gif.model';

export const GifSchema = new Schema<GifModel>({
  nome: String,
  sorteado: { type: Boolean, required: true },
  base64: String,
});

export const GifModelName = 'Gif';
