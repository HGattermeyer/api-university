import CreateCourseService from '@modules/course/services/CreateCourseService';
import DeleteCourseService from '@modules/course/services/DeleteCourseService';
import ListCourseService from '@modules/course/services/ListCourseService';
import UpdateCourseService from '@modules/course/services/UpdateCourseService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class CourseController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCourse = container.resolve(ListCourseService);

    const courses = await listCourse.execute();

    return response.json(courses);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createCourse = container.resolve(CreateCourseService);

    const course = await createCourse.execute({ name });

    return response.json(course);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { id } = request.params;

    const updateCourse = container.resolve(UpdateCourseService);

    const course = await updateCourse.execute({ name, id });

    return response.json(course);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCourse = container.resolve(DeleteCourseService);

    await deleteCourse.execute({ id });

    return response.json([]);
  }
}
