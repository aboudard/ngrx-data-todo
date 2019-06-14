import { Todo } from './dto/todo';
import { TodosService } from './services/todos.service';
import { increment } from './actions/counter.actions';
import { AppState } from './reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from './selectors/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ngRx1';
  count$: Observable<number>;
  loading$: Observable<boolean>;
  todos$: Observable<Todo[]>;

  constructor(
    private store: Store<AppState>,
    private todosService: TodosService
  ) {
    this.todos$ = todosService.entities$;
    this.loading$ = todosService.loading$;
  }

  ngOnInit(): void {
    this.store.dispatch(increment());
    this.count$ = this.store.pipe(
      select(selectCount)
    );
    this.todosService.getAll();
  }
}
