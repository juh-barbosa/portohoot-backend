import { Injectable } from '@nestjs/common';
import { GifRepository } from '../repository/Gif.repository';

@Injectable()
export class GifService {
  constructor(private readonly repository: GifRepository) {}

  async salvarGif(gifBuffer: Buffer, propriedades: any) {
    const gifBase64 = this.convertToBase64(gifBuffer);
    propriedades = { ...propriedades, base64: gifBase64, sorteado: false };

    return await this.repository.salvarGif(propriedades);
  }

  private convertToBase64(fileBuffer: Buffer): string {
    return fileBuffer.toString('base64');
  }
}
