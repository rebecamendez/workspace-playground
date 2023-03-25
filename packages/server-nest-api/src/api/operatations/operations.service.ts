import { Injectable } from '@nestjs/common';

@Injectable()
export class OperationsService {
  async getSlowOperation(sleepTimeSeconds: number): Promise<{ message: string }> {
    const sleepTime = sleepTimeSeconds * 1000;
    await this.sleep(sleepTime);

    return { message: `Slow operation finished after ${sleepTimeSeconds} seconds` };
  }

  async getThrowServerError(): Promise<void> {
    throw Error('Intentionally Server Error');
  }

  private async sleep(ms): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
