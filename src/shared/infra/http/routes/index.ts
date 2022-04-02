import studentRouter from '@modules/student/infra/http/router/customer.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/student', studentRouter);

export default routes;
