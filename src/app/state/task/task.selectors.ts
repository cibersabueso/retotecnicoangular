import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';
import { Task } from '../../models/task';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.ids.map(id => state.entities[id]).filter((task): task is Task => task !== null)
);

export const selectCompletedTasks = createSelector(
  selectAllTasks,
  (tasks: Task[]) => tasks.filter((task: Task) => task.completed)
);

export const selectPendingTasks = createSelector(
  selectAllTasks,
  (tasks: Task[]) => tasks.filter((task: Task) => !task.completed)
);