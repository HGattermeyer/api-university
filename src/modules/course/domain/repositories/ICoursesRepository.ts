import { ICourse } from '../models/ICourse';
import { ICreateCourse } from '../models/ICreateCourse';

export interface ICoursesRepository {
  findByName(name: string): Promise<ICourse | undefined>;
  findById(id: string): Promise<ICourse | undefined>;
  findAll(): Promise<ICourse[]>;
  create(data: ICreateCourse): Promise<ICourse>;
  save(course: ICourse): Promise<ICourse>;
  delete(course: ICourse): Promise<void>;
}
