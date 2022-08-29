import express, { Request, Response } from 'express';
import loginRoutes from './routes/login.routes';
import cookieSession from 'cookie-session';
import { router as controllerRouter } from './controllers/decorators/controller';

import './controllers/LoginController';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['session'] }));
app.use(loginRoutes);
app.use(controllerRouter);

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
