import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICourse } from '../domain/models/ICourse';
import { IUpdateCourse } from '../domain/models/IUpdateCourse';
import { ICoursesRepository } from '../domain/repositories/ICoursesRepository';

@injectable()
class UpdateCourseService {
  constructor(
    @inject('CourseRepository') private courseRepository: ICoursesRepository,
  ) {}

  public async execute({ name, id }: IUpdateCourse): Promise<ICourse> {
    const course = await this.courseRepository.findById(id);

    if (!course) {
      throw new AppError('There is no course with this id');
    }

    if (course.name !== name) {
      const nameExists = await this.courseRepository.findByName(name);

      if (nameExists) {
        throw new AppError('There is already a course with this name');
      }

      course.name = name;
    }

    await this.courseRepository.save(course);

    return course;
  }
}

export default UpdateCourseService;
