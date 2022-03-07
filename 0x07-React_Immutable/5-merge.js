import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}

// const list1 = ['list', 'one']
// const list2 = ['second', 'list']
// const obj1 = { first: 'obj' }
// const obj2 = { second: 'obj' }

// console.log(concatElements(list1, list2).toJS());
// console.log(mergeElements(obj1, obj2).toJS());
