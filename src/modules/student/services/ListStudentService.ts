import { inject, injectable } from 'tsyringe';
import { IStudent } from '../domain/models/IStudent';
import { IStudentsRepository } from '../domain/repositories/IStudentsRepository';

@injectable()
class ListStudentService {
  constructor(
    @inject('StudentRepository')
    private studentRepository: IStudentsRepository,
  ) {}

  public async execute(): Promise<IStudent[]> {
    const students = await this.studentRepository.findAll();

    return students;
  }
}

export default ListStudentService;
