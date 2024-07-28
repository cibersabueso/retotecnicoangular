import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TaskService } from '../../services/task.service';
import * as TaskActions from './task.actions';

@Injectable()
export class TaskEffects {
  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.loadTasks),
    mergeMap(() => this.taskService.getTasks()
      .pipe(
        map(tasks => TaskActions.loadTasksSuccess({ tasks })),
        catchError(() => of({ type: '[Task] Load Tasks Error' }))
      ))
  ));

  addTask$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.addTask),
    mergeMap(action => this.taskService.addTask(action.task)
      .pipe(
        map(task => TaskActions.addTaskSuccess({ task })),
        catchError(() => of({ type: '[Task] Add Task Error' }))
      ))
  ));

  updateTask$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.updateTask),
    mergeMap(action => this.taskService.updateTask(action.task)
      .pipe(
        map(task => TaskActions.updateTaskSuccess({ task })),
        catchError(() => of({ type: '[Task] Update Task Error' }))
      ))
  ));

  deleteTask$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.deleteTask),
    mergeMap(action => this.taskService.deleteTask(action.id)
      .pipe(
        map(() => TaskActions.deleteTaskSuccess({ id: action.id })),
        catchError(() => of({ type: '[Task] Delete Task Error' }))
      ))
  ));

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}
}