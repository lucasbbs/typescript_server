import { NextFunction, Request, Response, Router } from 'express';

@controller('/')
class LoginController {
  constructor(parameters) {}

  @get('/login')
  getLogin (req: Request, res: Response): void {
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
  });
}