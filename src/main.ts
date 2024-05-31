import { HttpAdapterHost, NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";
//import { HttpExceptionFilter } from "./core/http-exception.filter";
import { AllExceptionsFilter } from "./core/all-exceptions.filter";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //const { httpAdapter } = app.get(HttpAdapterHost);
  //Sentry.setupNestErrorHandler(app, new BaseExceptionFilter(httpAdapter));
  //app.useGlobalFilters(new HttpExceptionFilter());
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
