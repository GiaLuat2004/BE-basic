import { Router } from 'express';

const userRouter = Router();
userRouter.get('/', (req, res) => {
  res.send('get all users');
});

userRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`get user with id ${id}`);
});

userRouter.post('/', (req, res) => res.send({ title: 'CREATE new user' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }));

export default userRouter;
