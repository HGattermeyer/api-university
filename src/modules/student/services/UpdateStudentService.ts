import { inject, injectable } from 'tsyringe';
import { IStudent } from '../domain/models/IStudent';
import { IStudentsRepository } from '../domain/repositories/IStudentsRepository';
import { IUpdateStudent } from '../domain/models/IUpdateStudent';
import AppError from '@shared/infra/errors/AppError';

@injectable()
class UpdateStudentService {
  constructor(
    @inject('StudentRepository')
    private studentRepository: IStudentsRepository,
  ) {}

  public async execute({
    name,
    email,
    tax_id,
    id,
  }: IUpdateStudent): Promise<IStudent> {
    const student = await this.studentRepository.findById(id);

    if (!student) {
      throw new AppError('There is no student with this id.');
    }

    if (student.email !== email) {
      const emailExists = await this.studentRepository.findByEmail(email);
      if (emailExists) {
        throw new AppError('This email is already in use.');
      }

      student.email = email;
    }

    if (student.tax_id !== tax_id) {
      const taxIdExists = await this.studentRepository.findByTaxId(tax_id);
      if (taxIdExists) {
        throw new AppError('This Tax Id is already in use');
      }

      student.tax_id = tax_id;
    }

    student.name = name;

    await this.studentRepository.save(student);

    return student;
  }
}

export default UpdateStudentService;
