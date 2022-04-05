import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICourse } from '../domain/models/ICourse';
import { ICoursesRepository } from '../domain/repositories/ICoursesRepository';

@injectable()
class ShowCourseService {
  constructor(
    @inject('CourseRepository')
    private courseRepository: ICoursesRepository,
  ) {}

  public async execute(id: string): Promise<ICourse> {
    const course = await this.courseRepository.findById(id);

    if (!course) {
      throw new AppError('This course does not exist');
    }

    return course;
  }
}

export default ShowCourseService;
