import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const TaskActions = createActionGroup({
  source: 'Task',
  events: {
    'Load Tasks': emptyProps(),
    'Load Tasks Success': props<{ data: unknown }>(),
    'Load Tasks Failure': props<{ error: unknown }>(),
  }
});
