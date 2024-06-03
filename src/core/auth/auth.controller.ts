import { Controller, Request, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller("auth")
export class AuthController {
  //@UseGuards(AuthGuard("local"))
  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Request() req) {
    return req.user;
  }
}
