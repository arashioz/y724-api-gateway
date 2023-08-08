import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './routes/auth/auth.module';
import { AuthController } from './routes/auth/auth.controller';

@Module({
  imports: [AuthModule],
  controllers: [AuthController],
  providers: [AppService],
})
export class AppModule {}
