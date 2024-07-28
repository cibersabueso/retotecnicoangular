import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/task-list/task-list.component').then(m => m.TaskListComponent)
  },
  {
    path: 'add',
    loadComponent: () => import('./components/task-form/task-form.component').then(m => m.TaskFormComponent)
  }
];