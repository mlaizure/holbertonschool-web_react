import { List } from 'immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  return list.push(element);
}

// const myArray = ['list', 'items'];
// const myList = getListObject(myArray);
// console.log(myList);
// console.log(addElementToList(myList, 'new'));
// console.log(myList)
