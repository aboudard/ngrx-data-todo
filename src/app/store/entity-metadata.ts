import { EntityMetadataMap, PropsFilterFnFactory } from '@ngrx/data';


/**
 * Filter for entities whose name matches the case-insensitive pattern
 * The filter works on ALL properties
 * @param {T[]} entities
 * @param {string} pattern
 * @return {any[]}
 */
 export function textFilter<T extends { title: string; description: string }>(
  entities: T[],
  pattern: string
) {
  return PropsFilterFnFactory(['title', 'description'])(entities, pattern);
}


export function activeFilter(entities: { active: boolean }[], search: boolean) {
  return entities.filter(e => e.active === search);
}

const entityMetadata: EntityMetadataMap = {
  Todo: {
    filterFn: textFilter
  }
};

export const entityConfig = {
  entityMetadata
};
