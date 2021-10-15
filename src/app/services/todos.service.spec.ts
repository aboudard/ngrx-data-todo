import { TestBed, waitForAsync } from '@angular/core/testing';
import { EntityCollectionServiceElementsFactory, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { entityConfig } from '../store/entity-metadata';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TodosService } from './todos.service';

describe('TodosService', () => {

  let service: TodosService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, EffectsModule.forRoot([]), StoreModule.forRoot({}), EntityDataModule.forRoot(entityConfig)
      ],
      providers: [
        provideMockStore()
      ],
    });
    service = TestBed.inject(TodosService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
