import express from 'express';
import { PORT } from './config/env.js';

// Import routes
import subscriptionRouter from './routes/subscription.route.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
