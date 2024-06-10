import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { Request } from "express";
import { Response } from "express";
import { CreateUserDto } from "../dto/CreateUserDto";
import { UserNotFoundException } from "../core/exceptions/404/user-not-found-exception";
import { User } from "../core/models/user";
import { RolesGuard } from "../shared/guards/roles.guard";

@Controller("/")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("personaliser/:username")
  getHello(
    @Req() request: Request,
    @Param("username") username: string,
    @Query("name") name: string,
    @Body() body: CreateUserDto,
  ): string {
    console.log("body", body);
    console.log("query", request.query);
    console.log("params", request.params);
    console.log("headers", request.headers);

    return this.appService.getHello(username + "ave l in query " + name);
  }

  @Get("/users")
  async findAll(): Promise<any[]> {
    const list = this.appService.getUsers();
    if (list.length == 0) {
      throw new UserNotFoundException();
    }
    return list;
  }
  @UseGuards(RolesGuard)
  @Post("/users")
  async addUser(@Body() body: CreateUserDto): Promise<any> {
    const user = new User();
    user.firstname = body.firstname;
    user.lastname = body.lastname;
    console.log(user);
    console.log("body", body);
    this.appService.addUsers(user);
    return user;
  }
  @Get("/version")
  version(@Req() request: Request, @Res() response: Response) {
    response.status(HttpStatus.OK).send("1.0.1");
  }

  @Get("/a")
  methodeA(@Req() request: Request, @Res() response: Response) {
    console.log("middleware a");
    request.query["new_value"] = "values add in query ";
    this.methodeB(request, response);
  }
  @Get("/b")
  methodeB(@Req() request: Request, @Res() response: Response) {
    console.log("middleware b");
    this.methodeC(request, response);
  }
  @Get("/b")
  methodeC(@Req() request: Request, @Res() response: Response) {
    console.log("middleware c");
    throw new UserNotFoundException();
    response.status(HttpStatus.OK).send();
  }
}
