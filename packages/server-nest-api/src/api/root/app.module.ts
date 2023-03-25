import { Module } from '@nestjs/common';
import { OperationsModule } from '../operatations/operations.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [OperationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
