import { ICreateStudent } from '@modules/student/domain/models/ICreateStudent';
import { IStudent } from '@modules/student/domain/models/IStudent';
import { IStudentsRepository } from '@modules/student/domain/repositories/IStudentsRepository';
import { getRepository, Repository } from 'typeorm';
import Student from '../entities/Student';

class StudentRepository implements IStudentsRepository {
  private ormRepository: Repository<Student>;

  constructor() {
    this.ormRepository = getRepository(Student);
  }
  public async findAll(): Promise<IStudent[]> {
    const students = await this.ormRepository.find();

    return students;
  }

  public async findByName(name: string): Promise<IStudent | undefined> {
    const student = await this.ormRepository.findOne({
      where: {
        name: name,
      },
    });

    return student;
  }

  public async findByEmail(email: string): Promise<IStudent | undefined> {
    const student = await this.ormRepository.findOne({
      where: {
        email: email,
      },
    });

    return student;
  }

  public async findByTaxId(tax_id: string): Promise<IStudent | undefined> {
    const student = await this.ormRepository.findOne({
      where: {
        tax_id: tax_id,
      },
    });

    return student;
  }

  public async save(student: IStudent): Promise<IStudent> {
    await this.ormRepository.save(student);

    return student;
  }

  public async create({
    name,
    email,
    tax_id,
    password,
  }: ICreateStudent): Promise<IStudent> {
    const student = this.ormRepository.create({
      name,
      email,
      tax_id,
      password,
    });

    await this.ormRepository.save(student);

    return student;
  }
}

export default StudentRepository;
