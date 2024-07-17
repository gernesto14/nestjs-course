import { TaskStatus } from '../task-status.enum';
import { IsNotEmpty, IsInstance, IsOptional, IsString , IsEnum} from 'class-validator';

export class GetTasksFilterDTO {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
