import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { WelcomeController } from "./welcome.controller";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";
import { LoggerMiddleware } from "../core/logger.middleware";
import { MongooseModule } from "@nestjs/mongoose";
import { CatModule } from "src/cat/cat.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/edacydb", {
      connectionName: "cats",
    }),
    SharedModule,
    CoreModule,
    CatModule,
  ],
  controllers: [AppController, WelcomeController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/");
  }
}
