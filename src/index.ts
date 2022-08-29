import express, { Request, Response } from 'express';

import cookieSession from 'cookie-session';
import { AppRouter } from './app.routes';

import './controllers/LoginController';
import './controllers/RootController';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['session'] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Running on port 3000');
});

// class Server {
//
//   constructor() {
//     this.app.use(express.urlencoded({ extended: true }));
//     this.app.use(cookieSession({ keys: ['session'] }));
//     this.app.use(loginRoutes);
//   }

//   start(): void {
//     this.app.listen(3000, () => console.log('Running on port 3000'));
//   }
// }

// new Server().start();
