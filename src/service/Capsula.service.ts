import { Injectable, NotFoundException } from "@nestjs/common";
import * as crypto from 'crypto';
import { CapsulaRepository } from '../repository/Capsula.repository';

@Injectable()
export class CapsulaService {
  private algorithm = 'aes-256-ctr';
  constructor(private readonly repository: CapsulaRepository) {}


  private getKey(email: string): Buffer {
    return crypto.createHash('sha256').update(email).digest();
  }

  encrypt(email: string, message: string) {
    const key = this.getKey(email);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, key, iv);
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return this.repository.salvarMensagem(email, encrypted, iv.toString('hex'));
  }

  async decrypt(email: string): Promise<string> {
    const retrieve = await this.repository.recuperar(email);
    if (!retrieve) {
      console.log('Message not found for email:', email);
      throw new NotFoundException('Message not found');
    }
    console.log('Retrieved message:', retrieve);
    const key = this.getKey(email);
    const ivBuffer = Buffer.from(retrieve.iv, 'hex');
    const decipher = crypto.createDecipheriv(this.algorithm, key, ivBuffer);
    console.log('IV Buffer:', ivBuffer);
    console.log('Decipher:', decipher);
    console.log('Encrypted message:', retrieve.mensagem);
    let decrypted = decipher.update(retrieve.mensagem, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
