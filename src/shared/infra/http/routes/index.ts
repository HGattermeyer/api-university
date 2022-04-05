import courseRouter from '@modules/course/infra/http/router/course.routes';
import studentRouter from '@modules/student/infra/http/router/customer.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/student', studentRouter);
routes.use('/course', courseRouter);

export default routes;
