import { NextFunction, Request, Response, Router } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

export default router;
