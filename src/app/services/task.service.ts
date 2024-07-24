import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(title: string): Observable<Task> {
    const newTask: Task = {
      id: uuidv4(),
      title,
      completed: false,
      createdAt: new Date()
    };
    this.tasks.push(newTask);
    return of(newTask);
  }

  updateTask(task: Task): Observable<Task> {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
    return of(task);
  }

  deleteTask(id: string): Observable<string> {
    this.tasks = this.tasks.filter(t => t.id !== id);
    return of(id);
  }
}