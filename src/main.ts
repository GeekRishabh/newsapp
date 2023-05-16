import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv'
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.flushLogs();
/*  Load .env file variables  */
dotenv.config();
/*  Swagger Init   */
  const config = new DocumentBuilder()
    .setTitle('News App')
    .setDescription('News Application swagger docs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(compression());
  app.enableCors();
  await app.listen(3000);
}

bootstrap();
