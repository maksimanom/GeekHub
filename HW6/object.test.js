'use strict';

test('prototype', () => {
  let obj = {};
  expect(obj.constructor == Object).toEqual(true);
  let newObj = new Object;
  expect(newObj.constructor=== Object).toEqual(true);
  /*let arr = [];
  expect(arr.constructor == Object).toEqual(true);
  let arr1 = new Array;
  expect(arr1.constructor == Object).toEqual(true);
  let newArr = new Number(3);
  expect(newArr.constructor == Object).toEqual(true);*/
});

// M E T H O D S

test('assign', () => {
  let obj={a:1, b:2, c:3};
  let newObj = Object.assign({a:3}, obj);
  expect(newObj.a).toEqual(1);
});

test('create', () => {
  let person = {
    name: 'default'
  }
  let me = Object.create(person);
  me.name = "Maksym";
  me.lastName = "Kozoriz";
  expect(me.name + " " + me.lastName).toEqual("Maksym Kozoriz");
});

test('defineProperties', () => {
  let me = {};
  Object.defineProperties( me, {
    'name':{
      value: "Maksym",
      writable: false
    },
    'lastName': {
      value: 'Kozoriz',
      writable: true
    }
    }
  );
  //me.name="Vasya";
  me.lastName="Pupkin";
  expect(me.name).toEqual('Maksym');
  expect(me.lastName).toEqual('Pupkin');
});

test('entries', () => {
  let obj={a:"first", b:"second"};
  expect(Object.entries(obj)[1]).toEqual(['b', 'second']);
});

test('freeze', () => {
  const obj={a: 1, b:2};
  const obj1=Object.freeze(obj);
  // obj1.a=5; CANT, because frozen
  expect(obj1.a).toEqual(1);
});

/*test('fromEntries', () => {
  const obj = new Map([
    ['a', 1],
    ['b', 2]
  ])
  Object.fr
  const obj1 = Object.fromEntries(obj);
  expect(obj1).toEqual({a:1, b:2});
});*/

test('getPrototypeOf', () => {
  const obj1 = {};
  const obj2 = Object.create(obj1);
  expect(Object.getPrototypeOf(obj2) === obj1).toEqual(true);
});

test('Object.is', () => {
  let a = 5;
  expect(Object.is(5,a)).toEqual(true);
});

test('isxtensible', () => {
  const obj = {};
  expect(Object.isExtensible(obj)).toEqual(true);
  const obj1 = Object.freeze(obj);
  expect(Object.isExtensible(obj1)).toEqual(false);
});

test('isFrozen', () => {
  const obj = {};
  const obj1 = Object.freeze(obj);
  expect(Object.isFrozen(obj1)).toEqual(true);
});

test('isSealed', () => {
  const obj = {};
  expect(Object.isSealed(obj)).toEqual(false);
  Object.seal(obj);
  expect(Object.isSealed(obj)).toEqual(true);
});

test('keys', () => {
  const obj = {
    a: '1',
    b: 42,
    c: false
  };
  expect(Object.keys(obj)).toEqual(['a','b','c']);
});

test('tolocalString', () => {
  let num = 123456.789;
  expect(num.toLocaleString('de-DE')).toEqual('123,456.789');
});

test('toString', () => {
  function person(name){
    this.name = name;
  };
  let me = new person('Maksym');
  person.prototype.toString = function personToString() {
    return this.name;
  }
  expect(me.toString()).toEqual('Maksym');
});

test('valueOF', () => {
  function person(name) {
    this.n = name;
  };
  person.prototype.valueOf = function() {
    return this.n;
  };
  let me = new person('Maksym');
  expect(me.valueOf()).toEqual('Maksym');
});

test('seal', () => {
  let obj={
    a: 1
  }
  Object.seal(obj);
  obj.a = 5;
  expect(obj.a).toEqual(5);
  // delete obj.a; // CANT BE DELETED IF SEALED, soory
  expect(obj.a).toEqual(5);
});


test('values', () => {
  let obj = {
    a: 1,
    b: '1',
    c: false
  }
  expect(Object.values(obj)).toEqual([1, '1', false]);
});

/*
test('', () => {
  expect().toEqual();
});*/

