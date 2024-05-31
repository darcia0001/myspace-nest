import { Module } from "@nestjs/common";
import { CatController } from "./cat/cat.controller";
import { CatService } from "./cat/cat.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Cat, CatSchema } from "./schemas/cat.schema";
//import { Connection } from "mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }], "cats"),
  ],

  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
