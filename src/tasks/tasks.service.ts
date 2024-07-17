import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  // // Get task by id method
  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Task id: (${id}) not found`);
    } else {
      return found;
    }
  }

  // // Create task method
  async createTask(createTaskDTO: CreateTaskDTO) {
    return this.tasksRepository.createTask(createTaskDTO);
  }

  // // Get all tasks method
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // // Get tasks with filters method
  // getTaskWithFilters(filterDto: GetTasksFilterDTO) {
  //   const { status, search } = filterDto;
  //   // Create a temp array list
  //   let tasks = this.getAllTasks();
  //   // If status is provided do something
  //   if (status) {
  //     return tasks.filter((task) => {
  //       return task.status === status;
  //     });
  //   }
  //   // If search is provided do something
  //   else if (search) {
  //     return tasks.filter((task) => {
  //       return task.title.includes(search) || task.description.includes(search);
  //     });
  //   }
  //   // If no filter is provided return all tasks
  //   else {
  //     return tasks;
  //   }
  // }

  // // Delete task method
  // deleteTaskById(id: string): void {
  //   const found = this.getTaskById(id);
  //   // Find the index of the task with the given id
  //   const index = this.tasks.findIndex((task) => task.id === found.id);
  //   this.tasks.splice(index, 1);
  // }

  // // Update task status method
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
