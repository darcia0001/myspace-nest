import { ForbiddenException, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class TokenServiceMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["token"];
    //decode token to obtain user
    const user: any = { role: "admin" };
    if (user == null) {
      throw new ForbiddenException("token invalide");
    }

    req.headers["user"] = user;
    next();
  }
}
