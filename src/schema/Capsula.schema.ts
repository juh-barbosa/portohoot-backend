import { Schema } from 'mongoose';
import { CapsulaModel } from '../model/Capsula.model';

export const CapsulaSchema = new Schema<CapsulaModel>({
  email: String,
  mensagem: { type: String, required: true },
  iv: { type: String, required: true },
});

export const CapsulaModelName = 'Capsula';