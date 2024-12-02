import { Document } from 'mongoose';

export interface CapsulaModel extends Document {
  email: string;
  mensagem: string;
  iv: string;
  senha: string;
}

export interface CapsulaModelBackup extends Document {
  email: string;
  mensagem: string;
  iv: string;
}
