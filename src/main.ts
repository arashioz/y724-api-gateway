import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { I18nValidationPipe, i18nValidationErrorFactory } from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'POST,GET,PATCH,DELETE,PUT',
    credentials: true,
  });

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
