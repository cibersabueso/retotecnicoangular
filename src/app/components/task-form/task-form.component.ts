import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TaskActions from '../../state/task/task.actions';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
    taskForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const title = this.taskForm.get('title')?.value;
      this.store.dispatch(TaskActions.addTask({ title }));
      this.taskForm.reset();
    }
  }
}