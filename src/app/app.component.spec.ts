import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from './reducers';
import { TodosService } from './services/todos.service';
import { createSpyFromClass } from 'jasmine-auto-spies'
import { SubscriberSpy, subscribeSpyTo } from '@hirez_io/observer-spy';
import { increment } from './actions/counter.actions';

describe('AppComponent', () => {

  let componentUnderTest: AppComponent;
  let storeSpy: MockStore<Partial<AppState>>;
  let observerSpy: SubscriberSpy<any>;

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
    observerSpy = undefined;
  }));

  it('should create the app', () => {
    expect(componentUnderTest).toBeTruthy();
  });

  it('should dispatch the counter method', () => {
    componentUnderTest.ngOnInit();
    observerSpy = subscribeSpyTo(storeSpy.scannedActions$);
    const expectedAction = increment();
    expect(observerSpy.getValues()).toEqual([expectedAction]);
  });


});
