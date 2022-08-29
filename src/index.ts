import express, { Request, Response } from 'express';
import loginRoutes from './routes/login.routes';
import cookieSession from 'cookie-session';

// app.use(express.urlencoded({ extended: true }));
// app.use(cookieSession({ keys: [''] }));
// app.use(loginRoutes);

// app.listen(3000, () => console.log('Running on port 3000'));

// DO NOT WRITE THAT

class Server {
  app: express.Express = express();
  constructor() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieSession({ keys: ['session'] }));
    this.app.use(loginRoutes);
  }

  start(): void {
    this.app.listen(3000, () => console.log('Running on port 3000'));
  }
}

new Server().start();
