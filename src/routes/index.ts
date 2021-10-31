import { Router } from 'express';
import userRouter from './user.routes';
import userDataRouter from './userData.routes';
import productRouter from './product.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/userData', userDataRouter);
routes.use('/product', productRouter);

export default routes;
