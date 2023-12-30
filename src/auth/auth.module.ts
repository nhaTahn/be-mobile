import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { DatabaseModule } from '../database/database.module';
import { authProviders } from './auth.providers';
@Module({
  imports: [DatabaseModule,
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s'},
  })],
  providers: [AuthService, ...authProviders],
  controllers: [AuthController],
  exports: [AuthService]
})

export class AuthModule {}
