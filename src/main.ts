import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { taskReducer } from './app/state/task/task.reducer';
import { TaskEffects } from './app/state/task/task.effects';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ tasks: taskReducer }),
    provideEffects([TaskEffects]),
    provideStoreDevtools(),
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));