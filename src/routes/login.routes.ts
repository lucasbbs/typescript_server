import { Request, Response, Router } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email) res.send(email.toUpperCase());
  else res.send('Hello');
});

export default router;