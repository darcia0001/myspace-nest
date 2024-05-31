import { CreateCatDto } from "../dto/cat-dto";
import { Cat } from "../schemas/cat.schema";
import { CatService } from "./cat.service";
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller("cats")
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  async create(@Body() cat: CreateCatDto) {
    return this.catService.create(cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
