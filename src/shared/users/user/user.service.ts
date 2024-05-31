import { Injectable } from "@nestjs/common";
import { TokenisationService } from "../token/tokenisation/tokenisation.service";

@Injectable()
export class UserService {
  constructor(private tokenService: TokenisationService) {}

  public authentification(username: string, password: string) {
    //user
    const user = {};
    return this.tokenService.getToken(user);
  }
}
