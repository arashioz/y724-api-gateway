import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TranslatorModule } from 'nestjs-translator';
import { AuthController } from './routes/auth/auth.controller';
import { AuthModule } from './routes/auth/auth.module';

@Module({
  imports: [
    TranslatorModule.forRoot({
      global: true,
      defaultLang: 'fa',
      translationSource : '/src/i18n'
    }),
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [AppService],
})
export class AppModule {}
