import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';
import { createLogger } from 'winston';

export const winstonLoggerInstance = createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike('server-nest-api', {
          colors: true,
          prettyPrint: true,
        }),
      ),
    }),
  ],
});
