import { inject, injectable } from 'tsyringe';
import { ICoursesRepository } from '../domain/repositories/ICoursesRepository';
import { ICourse } from '@modules/course/domain/models/ICourse';

@injectable()
class ListCourseService {
  constructor(
    @inject('CourseRepository')
    private courseRepository: ICoursesRepository,
  ) {}

  public async execute(): Promise<ICourse[]> {
    const courses = await this.courseRepository.findAll();

    return courses;
  }
}

export default ListCourseService;
