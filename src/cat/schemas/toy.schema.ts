import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Cat } from "./cat.schema";

export type ToyDocument = HydratedDocument<Toy>;

@Schema()
export class Toy {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Cat" })
  owner: Cat;
}

export const ToySchema = SchemaFactory.createForClass(Toy);
