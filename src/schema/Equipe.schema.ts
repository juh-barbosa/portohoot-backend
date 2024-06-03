import { Schema } from 'mongoose';
import { EquipeModel } from '../model/Equipe.model';

export const EquipeSchema = new Schema<EquipeModel>({
  nome: String,
  participantes: { type: [], required: true },
  icone: { type: String, required: true },
  pontuacao: { type: Number, required: true },
});

export const EquipeModelName = 'Equipe';
