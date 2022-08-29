import { NextFunction, Request, Response, Router } from 'express';
import { bodyValidator, controller, get, post, use } from './decorators';

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

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid Email or Password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect('/');
  }
}
