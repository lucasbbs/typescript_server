import express, { Request, Response } from 'express';
import loginRoutes from './routes/login.routes';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskjdf'] }));
app.use(loginRoutes);

app.listen(3000, () => console.log('Running on port 3000'));
