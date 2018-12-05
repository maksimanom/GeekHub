'use strict';

test('prototype', () => {
  let obj = {};
  expect(obj.constructor=== Object).toEqual(true);
  let newObj = new Object;
  expect(newObj.constructor=== Object).toEqual(true);
  let arr = [];
  expect(arr.constructor=== Object).toEqual(true);
  let arr1 = new Array;
  expect(arr1.constructor=== Object).toEqual(true);
  let newArr = new Number(3);
  expect(newArr.constructor=== Object).toEqual(true);
});

// M E T H O D S

test('assign', () => {
  let obj={a:1, b:2, c:3};
  let newObj = Object.assign({a:3}, obj);
  expect(newObj.a).toEqual(1);
});

test('create', () => {

  expect().toEqual();
});

test('', () => {
  expect().toEqual();
});

test('', () => {
  expect().toEqual();
});

test('', () => {
  expect().toEqual();
});

test('', () => {
  expect().toEqual();
});

test('', () => {
  expect().toEqual();
});

test('', () => {
  expect().toEqual();
});

test('', () => {
  expect().toEqual();
});

test('', () => {
  expect().toEqual();
});
