import { NextFunction, Request, Response, Router } from 'express';
import { controller, get, use } from './decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  next();
}

@controller('/auth')
class LoginController {
  // @use(logger)
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method='post'>
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
      </div>
      <button>Submit </submit>
    </ form>
    `);
  }
}
