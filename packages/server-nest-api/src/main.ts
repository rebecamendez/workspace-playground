import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './api/root/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const version = process.env.npm_package_version;
  const config = new DocumentBuilder().setTitle('Server Nest API').setVersion(version).build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
