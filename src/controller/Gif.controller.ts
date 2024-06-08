import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { GifService } from '../service/Gif.service';

@Controller('api/gif')
export class GifController {
  constructor(private readonly gifService: GifService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createGifDto: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.gifService.salvarGif(file.buffer, createGifDto);
  }
}
