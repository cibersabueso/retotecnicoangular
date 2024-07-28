import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTask } from '../../state/task/task.actions';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
        this.store.dispatch(addTask({ task: { id: Date.now(), title: this.taskForm.value.title, completed: false } }));
      this.taskForm.reset();
    }
  }
}