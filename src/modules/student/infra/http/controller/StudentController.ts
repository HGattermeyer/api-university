import CreateStudentService from '@modules/student/services/CreateStudentService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class StudentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, taxId, password } = request.body;

    const createStudent = container.resolve(CreateStudentService);

    const student = createStudent.execute({ name, email, taxId, password });

    return response.json(student);
  }
}
