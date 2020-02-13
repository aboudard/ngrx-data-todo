import { NgModule } from '@angular/core';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

@NgModule({
  declarations: [],
  imports: [
    EntityDataModule.forRoot(entityConfig),
  ]
})
export class EntityStoreModule { }
