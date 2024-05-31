import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Document } from "mongoose";
export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: false })
  age: number;

  @Prop({ required: true })
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
