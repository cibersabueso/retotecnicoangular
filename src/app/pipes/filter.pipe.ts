import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(tasks: Task[] | null, filterFn: (tasks: Task[]) => Task[]): Task[] {
    return tasks ? filterFn(tasks) : [];
  }
}