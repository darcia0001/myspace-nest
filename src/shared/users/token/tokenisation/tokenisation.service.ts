import { Injectable } from "@nestjs/common";

@Injectable()
export class TokenisationService {
    
  public getToken(user: any) {
    return "gokent generer";
  }
}
