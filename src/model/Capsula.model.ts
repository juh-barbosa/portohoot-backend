import { Document } from 'mongoose';

export interface CapsulaModel extends Document {
  email: string;
  mensagem: string;
  iv: string;
}
