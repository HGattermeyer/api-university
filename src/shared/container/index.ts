import { IStudentsRepository } from '@modules/student/domain/repositories/IStudentsRepository';
import StudentRepository from '@modules/student/infra/typeorm/repositories/StudentRepository';
import { container } from 'tsyringe';

container.registerSingleton<IStudentsRepository>(
  'StudentRepository',
  StudentRepository,
);
