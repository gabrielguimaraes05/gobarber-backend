import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import userController from './app/controllers/UserControllers';
import sessionController from './app/controllers/SessionControllers';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ response: 'UP' });
});
routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddleware);
routes.put('/users', userController.update);

export default routes;
