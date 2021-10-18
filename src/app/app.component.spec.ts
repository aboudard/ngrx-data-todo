import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from './reducers';
import { TodosService } from './services/todos.service';
import { createSpyFromClass } from 'jasmine-auto-spies'

describe('AppComponent', () => {

  let componentUnderTest: AppComponent;
  let storeSpy: MockStore<Partial<AppState>>;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AppComponent,
        provideMockStore(),
        { provide: TodosService, useValue: createSpyFromClass(TodosService) },
      ],
    }).compileComponents();
    componentUnderTest = TestBed.inject(AppComponent);
    storeSpy = TestBed.inject(MockStore);
  }));

  it('should create the app', () => {
    expect(componentUnderTest).toBeTruthy();
  });


});
