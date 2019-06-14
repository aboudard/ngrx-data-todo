import { Todo } from './../dto/todo';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class TodosService extends EntityCollectionServiceBase<Todo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Todo', serviceElementsFactory);
  }
}
