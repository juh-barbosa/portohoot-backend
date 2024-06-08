import { Document } from 'mongoose';

export interface GifModel extends Document {
  nome: string;
  sorteado: boolean;
  base64: string;
}
