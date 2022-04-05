import { ICoursesRepository } from '@modules/course/domain/repositories/ICoursesRepository';
import CourseRepository from '@modules/course/infra/typeorm/repositories/CourseRepository';
import { IStudentsRepository } from '@modules/student/domain/repositories/IStudentsRepository';
import StudentRepository from '@modules/student/infra/typeorm/repositories/StudentRepository';
import { container } from 'tsyringe';

container.registerSingleton<IStudentsRepository>(
  'StudentRepository',
  StudentRepository,
);

container.registerSingleton<ICoursesRepository>(
  'CourseRepository',
  CourseRepository,
);
