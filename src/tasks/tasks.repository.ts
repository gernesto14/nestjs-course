import { Repository, EntityRepository, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    const { title, description } = createTaskDTO;

    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);
    return task;
  }
}
