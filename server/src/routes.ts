import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';

import authMiddleware from './middlewares/auth';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();

routes.get('/', (request, response) => {
    return response.send({ message: 'hello '})
});

routes.post('/auth', usersController.auth);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

routes.post('/users', usersController.create);
routes.get('/users', usersController.index);


routes.get('/users/:id', usersController.show)

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);
routes.use(authMiddleware);


export default routes;
