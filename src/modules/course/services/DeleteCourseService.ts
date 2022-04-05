import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IDeleteCourse } from '../domain/models/IDeleteCourse';
import { ICoursesRepository } from '../domain/repositories/ICoursesRepository';

@injectable()
class DeleteCourseService {
  constructor(
    @inject('CourseRepository')
    private courseRepository: ICoursesRepository,
  ) {}

  public async execute({ id }: IDeleteCourse): Promise<void> {
    const course = await this.courseRepository.findById(id);

    if (!course) {
      throw new AppError('This course does not exist.');
    }

    await this.courseRepository.delete(course);
  }
}

export default DeleteCourseService;
