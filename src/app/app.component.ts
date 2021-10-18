import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from './actions/counter.actions';
import { Todo } from './dto/todo';
import { AppState } from './reducers/index';
import { selectCount } from './selectors/counter.selectors';
import { TodosService } from './services/todos.service';

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
    // this.todosService.add({active: true, description: "added one", title: "added one"});
  }
}
