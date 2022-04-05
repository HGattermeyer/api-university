import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import CourseController from '../controller/CourseController';

const courseRouter = Router();
const courseController = new CourseController();

courseRouter.get('/', courseController.index);

courseRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  courseController.create,
);

courseRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  courseController.update,
);

courseRouter.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().uuid() } }),
  courseController.delete,
);

export default courseRouter;
