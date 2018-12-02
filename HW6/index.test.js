'use strict';

test('test_string', () => {
  expect('x').toEqual('x');
});

test('string_length', () => {
  let str = 'Maksym';
  expect(str.length).toEqual(6);
});

test('string_fromCharCode', () => {
  expect(String.fromCharCode(65)).toEqual('A');
});

test('string_fromCodePoint', () => {
  expect(String.fromCodePoint(65)).toEqual("A");
});

test('string_charAt', () => {
  let str = "Maksym Kozoriz";
  expect(str.charAt(7)).toEqual('K');
});

test('string_charCodeAt', () => {
  let str= "MAksym";
  expect(str.charCodeAt(2)).toEqual(65);
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
