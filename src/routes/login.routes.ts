import { NextFunction, Request, Response, Router } from 'express';
import 'reflect-metadata';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
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

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid Email or Password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href='/logout'>Log out</a>
      </div>
    `);
  } else {
    res.send(`
    <div>
      <div>You are not logged in</div>
      <a href='/login'>Log in</a>
    </div>
  `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});

export default router;

// DO NOT WRITE

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send('form');
  }

  @use(requireAuth)
  @post('/login')
  // @validateBody('email', 'password')
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email && password && email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid Email or Password');
    }
  }
}

function post(path: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    // router.post(path, target[key]);
    Reflect.defineMetadata('path', path, target, key);
  };
}
function get(path: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    // router.post(path, target[key]);
    Reflect.defineMetadata('path', path, target, key);
  };
}

function use(middleware: any) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    // router.addMiddlewareToHandlerWeJustRegistered(middleware);
  };
}

function controller(routeName: string) {
  return function (target: typeof LoginController) {
    for (const key in target.prototype) {
      const path = Reflect.getMetadata('path', target.prototype, key);
      const middleware = Reflect.getMetadata(
        'middleware',
        target.prototype,
        key
      );
      router.get(path, target.prototype[key]);
    }
  };
}
