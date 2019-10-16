import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'André Monello',
    email: 'atmonello@outlook.com',
    password_hash: '123412512',
  });

  res.json(user);
});

export default routes;
