import { Module } from "@nestjs/common";
import { CatController } from "./cat/cat.controller";
import { CatService } from "./cat/cat.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Cat, CatSchema } from "./schemas/cat.schema";
//import { Connection } from "mongoose";
console.log("Cat.name", Cat.name);
@Module({
  imports: [MongooseModule.forFeature([{ schema: CatSchema, name: Cat.name }])],

  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
