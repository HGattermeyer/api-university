import CreateStudentService from '@modules/student/services/CreateStudentService';
import DeleteStudentService from '@modules/student/services/DeleteStudentService';
import ListStudentService from '@modules/student/services/ListStudentService';
import UpdateStudentService from '@modules/student/services/UpdateStudentService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class StudentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listStudents = container.resolve(ListStudentService);

    const students = await listStudents.execute();

    return response.json(students);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, tax_id, password } = request.body;

    const createStudent = container.resolve(CreateStudentService);

    const student = await createStudent.execute({
      name,
      email,
      tax_id,
      password,
    });

    return response.json(student);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, tax_id } = request.body;
    const { id } = request.params;

    const updateStudent = container.resolve(UpdateStudentService);

    const student = await updateStudent.execute({
      name,
      email,
      tax_id,
      id,
    });

    return response.json(student);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteStudent = container.resolve(DeleteStudentService);

    await deleteStudent.execute({ id });

    return response.json([]);
  }
}
