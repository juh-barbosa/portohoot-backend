import { Document } from 'mongoose';

export interface PerguntasModel extends Document {
  pergunta: string;
  respostas: [];
  correta: string;
  status: number;
}
