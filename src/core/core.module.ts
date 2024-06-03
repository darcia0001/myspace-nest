import { Module } from '@nestjs/common';
import { AbstractService } from './abstract/abstract.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  providers: [AbstractService],
  imports: [AuthModule, UsersModule]
})
export class CoreModule {}
