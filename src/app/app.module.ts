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
    //"mongodb://192.168.1.197 :27017/edacydb"
    MongooseModule.forRoot(
      "mongodb+srv://mamadoukhoussa:GOzAYGLxszoXLXwH@clusteredacy.hauub91.mongodb.net/?retryWrites=true&w=majority&appName=clusteredacy",
    ),
    SharedModule,
    CoreModule,
    CatModule,
  ],
  controllers: [AppController, WelcomeController],
  providers: [AppService],
  exports: [MongooseModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/");
  }
}
