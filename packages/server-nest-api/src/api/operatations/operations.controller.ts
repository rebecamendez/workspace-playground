import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { OperationsService } from './operations.service';

@Controller('operations')
@ApiTags('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Get('slow-operation')
  @ApiQuery({ name: 'time', type: 'number', required: false })
  async getSlowOperation(@Query('time') time = 5): Promise<{ message: string }> {
    const message = await this.operationsService.getSlowOperation(time);
    return message;
  }

  @Get('throw-server-error')
  async getThrowServerError(): Promise<void> {
    await this.operationsService.getThrowServerError();
  }
}
