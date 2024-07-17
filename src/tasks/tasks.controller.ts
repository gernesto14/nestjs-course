import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // // Get task by id
  // // http://localhost:3000/tasks/:id
  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // // Create new task
  // // http://localhost:3000/tasks
  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): Promise<Task> {
    return this.tasksService.createTask(createTaskDTO);
  }

  // // Get all tasks or filter tasks
  // // http://localhost:3000/tasks
  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDTO) {
  //   if (Object.keys(filterDto).length) {
  //     console.log('filterDto controller: ', filterDto);
  //     return this.tasksService.getTaskWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  // // Delete task
  // // http://localhost:3000/tasks/:id
  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): void {
  //   this.tasksService.deleteTaskById(id);
  // }

  // // Update task status
  // // http://localhost:3000/tasks/:id/status
  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ) {
  //   const { status } = updateTaskStatusDto;

  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
