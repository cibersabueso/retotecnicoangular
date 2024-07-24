import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import * as TaskActions from '../../state/task/task.actions';
import { selectAllTasks } from '../../state/task/task.reducer';
import { AppState } from '../../state/app.state';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  filterValue: 'all' | 'completed' | 'pending' = 'all';

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(state => selectAllTasks(state.tasks));
  }

  ngOnInit() {
    this.store.dispatch(TaskActions.loadTasks());
  }

  onDeleteTask(id: string) {
    this.store.dispatch(TaskActions.deleteTask({ id }));
  }

  onToggleComplete(task: Task) {
    const updatedTask = { ...task, completed: !task.completed };
    this.store.dispatch(TaskActions.updateTask({ task: updatedTask }));
  }

  filterTasks(tasks: Task[]): Task[] {
    if (!tasks) return [];
    
    switch (this.filterValue) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }
}