import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
    @Input() task!: Task;
  @Output() toggleComplete = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<string>();

  onToggleComplete() {
    this.toggleComplete.emit(this.task);
  }

  onDeleteTask() {
    this.deleteTask.emit(this.task.id);
  }
}