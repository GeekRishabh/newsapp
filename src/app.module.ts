import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { GnewsService } from './gnews/gnews.service';

@Module({
  imports: [],
  controllers: [AppController, NewsController],
  providers: [AppService, GnewsService],
})
export class AppModule {}
