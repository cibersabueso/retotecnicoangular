import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../../models/task';
import { updateTask, deleteTask } from '../../state/task/task.actions';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task!: Task;
  editForm: FormGroup;
  isEditing = false;

  constructor(private store: Store, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  toggleComplete(): void {
    const updatedTask = { ...this.task, completed: !this.task.completed };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }
  
  deleteTask(): void {
    this.store.dispatch(deleteTask({ id: this.task.id }));
  }
  
  startEditing(): void {
    this.isEditing = true;
    this.editForm.setValue({ title: this.task.title });
  }
  
  saveEdit(): void {
    if (this.editForm.valid) {
      const updatedTask = { ...this.task, title: this.editForm.value.title };
      this.store.dispatch(updateTask({ task: updatedTask }));
      this.isEditing = false;
    }
  }
  
  cancelEdit(): void {
    this.isEditing = false;
  }
}