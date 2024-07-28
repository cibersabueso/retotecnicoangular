import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Task } from '../../models/task';
import * as TaskActions from './task.actions';

export interface TaskState extends EntityState<Task> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: TaskState = adapter.getInitialState({
  // additional entity state properties
});

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.addTask, (state, { task }) => adapter.addOne(task, state)),
  on(TaskActions.updateTask, (state, { task }) => adapter.updateOne({ id: task.id, changes: task }, state)),
  on(TaskActions.deleteTask, (state, { id }) => adapter.removeOne(id, state)),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => adapter.setAll(tasks, state))
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();