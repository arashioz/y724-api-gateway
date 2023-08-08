import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('yara724-backend')
    .setVersion('1.0.0')
    .build();
  const docs = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/', app, docs);
  await app.listen(3000);
}
bootstrap();
