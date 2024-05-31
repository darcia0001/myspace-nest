import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReferentielModule } from './referentiel/referentiel.module';
import { TranslateModule } from './translate/translate.module';

@Module({
  imports: [UsersModule, ReferentielModule, TranslateModule],
  exports: [UsersModule, ReferentielModule, TranslateModule],
})
export class SharedModule {}
