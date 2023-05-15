import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { GnewsService } from './gnews/gnews.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController, NewsController],
  providers: [AppService, GnewsService],
})
export class AppModule {}
