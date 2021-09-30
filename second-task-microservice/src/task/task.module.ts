import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskDocument, TaskSchema } from './schema/task.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:TaskDocument.name,schema:TaskSchema}])],
  providers: [TaskService],
  controllers: [TaskController]
})
export class TaskModule {}
