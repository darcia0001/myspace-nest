import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as Sentry from '@sentry/node';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    console.log('Request...', req.body, req.headers, req.query, req.headers);
    Sentry.captureMessage(
      'request: ' + Date() + req.body + 'headers' + 'query' + req.query,
    );
    next();
  }
}
