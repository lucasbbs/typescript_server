import express, { Request, Response } from 'express';
import loginRoutes from './routes/login.routes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(loginRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send(`
  <div>  
    <h1>Hi, there!</h1>
  </div>
  `);
});

app.listen(3000, () => console.log('Running on port 3000'));
