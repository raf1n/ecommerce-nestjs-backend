import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
    })
  );

  app.enableCors({
    origin: "*", // Allow all origins (not recommended for production)
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  });

  await app.listen(process.env.PORT || 8000);
  console.log(`${process.env.APP_NAME} listening on port ${process.env.PORT}`);
}
bootstrap();
