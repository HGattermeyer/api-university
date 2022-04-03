import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IDeleteStudent } from '../domain/models/IDeleteStudent';
import { IStudentsRepository } from '../domain/repositories/IStudentsRepository';

@injectable()
class DeleteStudentService {
  constructor(
    @inject('StudentRepository')
    private studentRepository: IStudentsRepository,
  ) {}

  public async execute({ id }: IDeleteStudent): Promise<void> {
    const student = await this.studentRepository.findById(id);

    if (!student) {
      throw new AppError('This student does not exist');
    }

    this.studentRepository.delete(student);
  }
}

export default DeleteStudentService;
