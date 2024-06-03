import { Document } from 'mongoose';

export interface EquipeModel extends Document {
  nome: string;
  participantes: [];
  icone: string;
  pontuacao: number;
}
