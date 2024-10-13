import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api').enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(process.env.PORT || '3000');
};

bootstrap();
