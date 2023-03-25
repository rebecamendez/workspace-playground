import { Injectable } from '@nestjs/common';
import * as ChildProcess from 'child_process';

@Injectable()
export class AppService {
  getHello(): { message: string; metadata: object } {
    const build_version = process.env.npm_package_version;
    const build_sha = this.getBuildVersion();
    const current_utc_date = new Date().toUTCString();

    return {
      message: `Hello World from: @server-nest-api (v${build_version})`,
      metadata: { build_version, build_sha, current_utc_date },
    };
  }

  private getBuildVersion(): string {
    let version = '';
    try {
      version = ChildProcess.execSync('git rev-parse HEAD').toString().trim();
    } catch {
      // do nothing
    }

    return version;
  }
}
