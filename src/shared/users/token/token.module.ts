import { Module } from "@nestjs/common";
import { TokenisationService } from "./tokenisation/tokenisation.service";

@Module({
  exports: [TokenisationService],
  providers: [TokenisationService],
})
export class TokenModule {}
