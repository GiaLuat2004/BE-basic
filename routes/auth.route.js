import { Router } from 'express';

const authRouter = Router();

authRouter.post('/login', (req, res) => {
  res.send({ title: 'Login Page' });
});
authRouter.post('/register', (req, res) => {
  res.send({ title: 'Register Page' });
});
authRouter.post('/logout', (req, res) => {
  res.send({ title: 'Logout Page' });
});

export default authRouter;
