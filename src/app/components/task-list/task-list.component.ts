import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { loadTasks } from '../../state/task/task.actions';
import { selectAllTasks, selectCompletedTasks, selectPendingTasks } from '../../state/task/task.selectors';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, MatTabsModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  completedTasks$: Observable<Task[]>;
  pendingTasks$: Observable<Task[]>;

  constructor(private store: Store) {
    this.tasks$ = this.store.select(selectAllTasks);
    this.completedTasks$ = this.store.select(selectCompletedTasks);
    this.pendingTasks$ = this.store.select(selectPendingTasks);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }
}