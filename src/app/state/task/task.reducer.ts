import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TaskActions from './task.actions';
import { Task } from '../../models/task';

export interface TaskState extends EntityState<Task> {
  loading: boolean;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: TaskState = adapter.getInitialState({
  loading: false
});

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadTasks, state => ({ ...state, loading: true })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => {
    return adapter.setAll(tasks, { ...state, loading: false });
  }),
  on(TaskActions.addTaskSuccess, (state, { task }) => {
    return adapter.addOne(task, state);
  }),
  on(TaskActions.updateTaskSuccess, (state, { task }) => {
    return adapter.updateOne({ id: task.id, changes: task }, state);
  }),
  on(TaskActions.deleteTaskSuccess, (state, { id }) => {
    return adapter.removeOne(id, state);
  })
);

export const { selectAll: selectAllTasks, selectEntities: selectTaskEntities } = adapter.getSelectors();