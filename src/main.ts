import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import * as path from 'path';
import { ValidationExceptionFilter } from './common/validation-exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  

  const config = new DocumentBuilder()
    .setTitle('eCommerce')
    .setDescription(`/swagger/v1/swagger.json`)
    .setVersion('v1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(5000);
}
bootstrap();
