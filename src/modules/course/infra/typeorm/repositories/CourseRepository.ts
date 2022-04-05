import { ICourse } from '@modules/course/domain/models/ICourse';
import { ICreateCourse } from '@modules/course/domain/models/ICreateCourse';
import { ICoursesRepository } from '@modules/course/domain/repositories/ICoursesRepository';
import { getRepository, Repository } from 'typeorm';
import Course from '../entities/Course';

class CourseRepository implements ICoursesRepository {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  public async findByName(name: string): Promise<ICourse | undefined> {
    const course = await this.ormRepository.findOne({ where: { name: name } });

    return course;
  }

  public async findById(id: string): Promise<ICourse | undefined> {
    const course = await this.ormRepository.findOne({ where: { id: id } });

    return course;
  }
  public async findAll(): Promise<ICourse[]> {
    const courses = await this.ormRepository.find();

    return courses;
  }
  public async create({ name }: ICreateCourse): Promise<ICourse> {
    const course = await this.ormRepository.save({ name });

    return course;
  }

  public async save(course: ICourse): Promise<ICourse> {
    const updatedCourse = await this.ormRepository.save(course);

    return updatedCourse;
  }

  public async delete(course: ICourse): Promise<void> {
    await this.ormRepository.remove(course);
  }
}

export default CourseRepository;
