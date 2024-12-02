import { Injectable, NotFoundException } from '@nestjs/common';
import * as crypto from 'crypto';
import { CapsulaRepository } from '../repository/Capsula.repository';

@Injectable()
export class CapsulaService {
  private algorithm = 'aes-256-ctr';
  constructor(private readonly repository: CapsulaRepository) {}

  private getKey(email: string): Buffer {
    return crypto.createHash('sha256').update(email).digest();
  }

  async encrypt(email: string, message: string) {
    const key = this.getKey(email);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, key, iv);
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return await this.repository.salvarMensagemNova(
      email,
      encrypted,
      iv.toString('hex'),
    );
  }

  async decrypt(_id: string): Promise<any> {
    const retrieve = await this.repository.recuperar(_id);
    const key = this.getKey(retrieve[0].email);
    const ivBuffer = Buffer.from(retrieve[0].iv, 'hex');
    const decipher = crypto.createDecipheriv(this.algorithm, key, ivBuffer);

    let decrypted = decipher.update(retrieve[0].mensagem, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return { message: decrypted };
  }

  async decryptForFunction(email, iv, mensagem) {
    const key = this.getKey(email);
    const ivBuffer = Buffer.from(iv, 'hex');
    const decipher = crypto.createDecipheriv(this.algorithm, key, ivBuffer);
    let decrypted = decipher.update(mensagem, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }

  async processingMessageAndMails(): Promise<any> {
    const messagesAndEmail = await this.repository.getAllMessagesAndEmails();
    for (const element of messagesAndEmail) {
      let mensagem = '';

      if (element.messages.length > 1) {
        if (!element.messages[0] === element.messages[1]) {
          const m1 = await this.decryptForFunction(
            element.email,
            element.iv[0],
            element.messages[0],
          );
          const m2 = await this.decryptForFunction(
            element.email,
            element.iv[1],
            element.messages[1],
          );
          mensagem = m1 + ' ' + m2;

          await this.encrypt(
            element.email.trim().toLowerCase(),
            mensagem.trim(),
          );
        }
      } else if (element.messages.length == 1) {
        mensagem = await this.decryptForFunction(
          element.email,
          element.iv[0],
          element.messages[0],
        );
        await this.encrypt(element.email.trim().toLowerCase(), mensagem.trim());
      } else {
        console.log(element.email, mensagem);
      }
    }
  }

  async getEmails() {
    return await this.repository.getEmails();
  }

  async validateEmail(email, password) {
    const info = await this.repository.validateEmail(email);
    if (info.length === 0) {
      return {
        message: `
          <p>Olá! Percebemos que não encontramos uma mensagem sua para guardar nesta cápsula do tempo. Mas não tem problema, estamos aqui para deixar algumas palavras em seu nome. 💌</p>
          <p>Desejo que este final de ano seja cheio de paz, alegria e momentos especiais com quem você ama. Que o próximo ano traga saúde, felicidade e muitas conquistas para sua vida.</p>
          <p>Com carinho,</p>
          <p><strong>Comissão 2024</strong></p>
        `,
      };
    } else if (info.length > 0) {
      if (info[0]['senha'] == password) {
        return this.decrypt(info[0]._id);
      } else if (info[0]?.senha !== password) {
        return { message: 'Verifique seu email ou senha' };
      }
    }
  }
}
