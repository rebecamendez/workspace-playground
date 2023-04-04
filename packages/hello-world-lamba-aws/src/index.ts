import { Handler, S3Event } from "aws-lambda";
export const handler: Handler = async (events: S3Event): Promise<void> => {
  const msg = "Hello World!";
  console.log(msg);
  console.log(`ending lambda ...`);
};

console.log("Hello world Before handler!");
