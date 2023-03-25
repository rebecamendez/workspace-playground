import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; metadata: object } {
    const build_version = '1233';
    const build_sha = '1234';
    const build_date = '1234';
    const current_utc_date = new Date().toUTCString();

    return {
      message: `Hello World from: @server-nest-api (v${build_version})`,
      metadata: { build_version, build_sha, build_date, current_utc_date },
    };
  }
}
