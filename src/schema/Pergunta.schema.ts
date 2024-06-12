import { Schema } from 'mongoose';
import { PerguntasModel } from '../model/Perguntas.model';

export const PerguntasSchema = new Schema<PerguntasModel>({
  pergunta: String,
  respostas: { type: [], required: true },
  correta: { type: String, required: true },
  status: { type: Number, required: true },
});

export const PerguntasModelName = 'Perguntas';
