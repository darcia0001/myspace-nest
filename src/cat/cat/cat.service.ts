import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cat } from "../schemas/cat.schema";
import { CreateCatDto } from "../dto/cat-dto";

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel
      .aggregate([
        {
          $lookup: {
            from: "toys",
            localField: "_id",
            foreignField: "owner",
            as: "toys",
          },
        },
      ])
      .exec();
  }
}