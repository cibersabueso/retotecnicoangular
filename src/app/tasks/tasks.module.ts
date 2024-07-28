import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskFormComponent } from '../components/task-form/task-form.component';
import { TaskItemComponent } from '../components/task-item/task-item.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TaskListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    TaskListComponent,
    TaskFormComponent,
    TaskItemComponent
  ]
})
export class TasksModule { }