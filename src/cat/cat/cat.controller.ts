import { CreateCatDto } from "../dto/cat-dto";
import { CreateToyDto } from "../dto/toy-dto";
import { Cat } from "../schemas/cat.schema";
import { CatService } from "./cat.service";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ToyService } from "./toy.service";
import { Toy } from "../schemas/toy.schema";

@Controller("cats")
export class CatController {
  constructor(
    private readonly catService: CatService,
    private readonly toyService: ToyService,
  ) {}

  @Post()
  async create(@Body() cat: CreateCatDto) {
    return this.catService.create(cat);
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
  /**
   * return tous les toys avec leurs owner
   */
  @Get("all-toys")
  async findAllToyWithsCatInfos(): Promise<any[]> {
    return this.toyService.findAllWithCatInfos();
  }

  @Post("toys")
  async createToy(@Body() toy: CreateToyDto) {
    return this.toyService.create(toy);
  }

  @Get(":id/toys")
  async findAllToyForACat(@Param("id") catId: string): Promise<Toy[]> {
    console.log("catId", catId);
    return this.toyService.findByCatId(catId);
  }
}
