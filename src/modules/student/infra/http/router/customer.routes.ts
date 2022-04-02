import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import StudentController from '../controller/StudentController';

const studentRouter = Router();
const studentsController = new StudentController();

studentRouter.get('/', studentsController.index);

studentRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      tax_id: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  studentsController.create,
);

studentRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      tax_id: Joi.string().required(),
    },
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  studentsController.update,
);

export default studentRouter;
