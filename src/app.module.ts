import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { UnkeyModule } from './unkey/unkey.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UnkeyModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
