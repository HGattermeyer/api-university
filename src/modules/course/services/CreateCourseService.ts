import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICourse } from '../domain/models/ICourse';
import { ICreateCourse } from '../domain/models/ICreateCourse';
import { ICoursesRepository } from '../domain/repositories/ICoursesRepository';

@injectable()
class CreateCourseService {
  constructor(
    @inject('CourseRepository') private courseRepository: ICoursesRepository,
  ) {}

  public async execute({ name }: ICreateCourse): Promise<ICourse> {
    const courseExists = await this.courseRepository.findByName(name);

    if (courseExists) {
      throw new AppError('There is already a course with this name.');
    }

    const course = await this.courseRepository.create({ name });

    return course;
  }
}

export default CreateCourseService;
