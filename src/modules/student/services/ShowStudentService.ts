import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IShowStudent } from '../domain/models/IShowStudent';
import { IStudent } from '../domain/models/IStudent';
import { IStudentsRepository } from '../domain/repositories/IStudentsRepository';

@injectable()
class ShowStudentService {
  constructor(
    @inject('StudentRepository')
    private studentRepository: IStudentsRepository,
  ) {}

  public async execute({ id }: IShowStudent): Promise<IStudent> {
    const student = await this.studentRepository.findById(id);

    if (!student) {
      throw new AppError('There is no student with this id.');
    }

    return student;
  }
}

export default ShowStudentService;
