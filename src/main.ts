import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { I18nValidationPipe, i18nValidationErrorFactory } from 'nestjs-i18n';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin,Accept,Content-Type,Authorization',
    credentials: true,
  };
  
  app.enableCors(corsOptions);
  app.useGlobalPipes(new I18nValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('yara724-backend')
    .setVersion('1.0.0')
    .build();
  const docs = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/', app, docs);
  await app.listen(3000);
}
bootstrap();
