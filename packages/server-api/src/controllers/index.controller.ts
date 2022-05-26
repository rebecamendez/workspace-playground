import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public slowOperation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const sleepTime = Number(req.params.seconds || 0) * 1000;
      await sleep(sleepTime);
      res.status(200).json({ data: {}, message: 'slowOperation' });
    } catch (error) {
      next(error);
    }
  };
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default IndexController;
