import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Toy } from "../schemas/toy.schema";
import { CreateToyDto } from "../dto/toy-dto";

@Injectable()
export class ToyService {
  constructor(@InjectModel(Toy.name) private toyModel: Model<Toy>) {}

  async create(createToyDto: CreateToyDto): Promise<Toy> {
    const createdToy = new this.toyModel(createToyDto);
    return createdToy.save();
  }

  async findAll(): Promise<Toy[]> {
    return this.toyModel.find().exec();
  }

  async findAllWithCatInfos(): Promise<any[]> {
    return this.toyModel
      .aggregate([
        {
          $lookup: {
            from: "cats",
            localField: "owner",
            foreignField: "_id",
            as: "cat",
          },
        },
        {
          $unwind: "$cat",
        },
      ])
      .exec();
  }

  async findByCatId(catId: string): Promise<Toy[]> {
    return this.toyModel.find({ owner: catId }).exec();
  }
}
