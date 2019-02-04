'use strict';

test('number_epsilon', () => {
  let num = 2.1583942e-17;
  expect(num<Number.EPSILON).toEqual(true);
});

test('number_maxSafeInteger', () => {
  expect(Number.MAX_SAFE_INTEGER).toEqual(9007199254740991);
});

test('number_maxValue', () => {
  expect(Number.MAX_VALUE).toEqual(1.7976931348623157e+308);
});

test('number_minSaefInteger', () => {
  expect(Number.MIN_SAFE_INTEGER).toEqual(-9007199254740991);
});

test('minValue', () => {
  expect(Number.MIN_VALUE).toEqual(5e-324);
});

test('negativeInfinity', () => {
  expect(Number.NEGATIVE_INFINITY).toEqual(-Infinity);
});

test('NaN', () => {
  let num = Number.NaN;
  expect(isNaN(num)).toEqual(true);
});

test('positive_infinity', () => {
  expect(Number.POSITIVE_INFINITY).toEqual(+Infinity);
});

// M E T H O D S

test('isFinite', () => {
  expect(Number.isFinite(5/0)).toEqual(false);
});

test('isInteger', () => {
  expect(Number.isInteger(10/2)).toEqual(true);
});

test('isNaN', () => {
  expect(Number.isNaN(NaN)).toEqual(true);
});

test('isSafeInteger', () => {
  expect(Number.isSafeInteger(Math.pow(2,54))).toEqual(false); //Max Safe Integer is 2^53
});

test('parseFloat', () => {
  expect(Number.parseFloat('2.11fsdf')).toEqual(2.11);
});

test('parseInt', () => {
  expect(Number.parseInt(' 2.9 1fsdf',10)).toEqual(2);
});

/*test('toExponential', () => {
  expect(Number.toExponential(77)).toEqual(7.7e+1);
});*/

test('toFixed', () => {
  let num = 123.456;
  expect(num.toFixed(1)).toEqual('123.5');
});

test('toLocaleString', () => {
  let num=1000;
  expect(num.toLocaleString('es-EN')).toEqual('1,000');
});

test('toPrecision', () => {
  let num=1234.5678;
  expect(num.toPrecision(6)).toEqual('1234.57');
});

test('toString', () => {
  let num = 123;
  expect(num.toString(10)).toEqual('123');
});

test('valueOf', () => {
  let num = new Number(10);
  expect(num.valueOf()).toEqual(10);
});

/*test('', () => {
  expect().toEqual();
});*/


