import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { selectAllTasks, selectCompletedTasks, selectPendingTasks } from '../../state/task/task.selectors';
import { loadTasks } from '../../state/task/task.actions';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListComponent, MatTabsModule, NoopAnimationsModule],
      providers: [provideMockStore()]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadTasks action on init', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(loadTasks());
  });

  it('should select all tasks', (done) => {
    const mockTasks = [{ id: 1, title: 'Task 1', completed: false }];
    store.overrideSelector(selectAllTasks, mockTasks);
    component.tasks$.subscribe(tasks => {
      expect(tasks).toEqual(mockTasks);
      done();
    });
  });

  it('should select completed tasks', (done) => {
    const mockCompletedTasks = [{ id: 1, title: 'Task 1', completed: true }];
    store.overrideSelector(selectCompletedTasks, mockCompletedTasks);
    component.completedTasks$.subscribe(tasks => {
      expect(tasks).toEqual(mockCompletedTasks);
      done();
    });
  });

  it('should select pending tasks', (done) => {
    const mockPendingTasks = [{ id: 1, title: 'Task 1', completed: false }];
    store.overrideSelector(selectPendingTasks, mockPendingTasks);
    component.pendingTasks$.subscribe(tasks => {
      expect(tasks).toEqual(mockPendingTasks);
      done();
    });
  });
});