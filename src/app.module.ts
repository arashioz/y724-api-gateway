import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TranslatorModule } from 'nestjs-translator';
import { AuthController } from './routes/auth/auth.controller';
import { AuthModule } from './routes/auth/auth.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Cors } from './interceptor/cors.interceptor';

@Module({
  imports: [
    TranslatorModule.forRoot({
      global: true,
      defaultLang: 'fa',
      translationSource: '/src/i18n',
    }),
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: Cors,
    },
    AppService,
  ],
})
export class AppModule {}
