import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import StudentController from '../controller/StudentController';

const studentRouter = Router();
const studentsController = new StudentController();

studentRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      taxId: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  studentsController.create,
);

export default studentRouter;
