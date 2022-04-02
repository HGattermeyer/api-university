import { ICreateStudent } from '../models/ICreateStudent';
import { IStudent } from '../models/IStudent';

export interface IStudentsRepository {
  findByName(name: string): Promise<IStudent | undefined>;
  findByEmail(email: string): Promise<IStudent | undefined>;
  findByTaxId(tax_id: string): Promise<IStudent | undefined>;
  findAll(): Promise<IStudent[]>;
  create(data: ICreateStudent): Promise<IStudent>;
  save(student: IStudent): Promise<IStudent>;
}
