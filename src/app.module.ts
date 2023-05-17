import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { HttpModule } from '@nestjs/axios';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { GnewsService } from './gnews/gnews.service';

dotenv.config();
const env: string = process.env.ENV;
console.log(`Environment: ${env}`);
@Module({
  imports: [ConfigModule.forRoot(), HttpModule, CacheModule.register()],
  controllers: [AppController, NewsController],
  providers: [AppService, GnewsService],
})
export class AppModule {}
