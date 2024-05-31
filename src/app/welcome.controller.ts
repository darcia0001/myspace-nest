import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "src/shared/users/user/user.service";
import { LoginUserDto } from "src/shared/users/dto/LoginUserDto";
import { AppService } from "./app.service";

@Controller("/auth")
export class WelcomeController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Post("connexion")
  connexion(@Body() userCredential: LoginUserDto): string {
    return this.userService.authentification(
      userCredential.username,
      userCredential.password,
    );
  }

  @Get()
  getHello(): string {
    return this.appService.getHello("dd");
  }
}
