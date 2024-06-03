import { Module } from "@nestjs/common";
import { CatController } from "./cat/cat.controller";
import { CatService } from "./cat/cat.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Cat, CatSchema } from "./schemas/cat.schema";
import { Toy, ToySchema } from "./schemas/toy.schema";
import { ToyService } from "./cat/toy.service";
import { AuthModule } from "src/core/auth/auth.module";
//import { Connection } from "mongoose";
console.log("Cat.name", Cat.name);
@Module({
  imports: [
    MongooseModule.forFeature([{ schema: CatSchema, name: Cat.name }]),
    MongooseModule.forFeature([{ schema: ToySchema, name: Toy.name }]),
    AuthModule,
  ],

  controllers: [CatController],
  providers: [CatService, ToyService],
})
export class CatModule {}
