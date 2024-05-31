import { Module } from '@nestjs/common';
import { AbstractService } from './abstract/abstract.service';

@Module({
  providers: [AbstractService]
})
export class CoreModule {}
