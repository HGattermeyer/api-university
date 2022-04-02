import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateStudent } from '../domain/models/ICreateStudent';
import { IStudent } from '../domain/models/IStudent';
import { IStudentsRepository } from '../domain/repositories/IStudentsRepository';

@injectable()
class CreateStudentService {
  constructor(
    @inject('StudentRepository')
    private studentRepository: IStudentsRepository,
  ) {}

  public async execute({
    name,
    email,
    taxId,
    password,
  }: ICreateStudent): Promise<IStudent> {
    const emailExists = await this.studentRepository.findByEmail(email);

    if (!emailExists) {
      throw new AppError('This email already exists');
    }

    const taxIdExists = await this.studentRepository.findByTaxId(taxId);

    if (!taxIdExists) {
      throw new AppError('This Tax ID already exists');
    }

    const student = await this.studentRepository.create({
      name,
      email,
      taxId,
      password,
    });

    return student;
  }
}

export default CreateStudentService;
