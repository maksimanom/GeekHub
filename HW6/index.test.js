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
  let str= "Maksym Kozoriz";
  expect(str.charCodeAt(3)).toEqual(115);
});

test('string_codePointAt', () => {
  let str="Maksym Kozoriz";
  expect(str.charCodeAt(3)).toEqual(115);
});

test('string_concat', () => {
  let str1 = 'Maksym';
  let str2 = 'Kozoriz';
  expect(str1.concat(str2)).toEqual("MaksymKozoriz");
});

test('string_endsWith', () => {
  let str = "Maksym Kozoriz";
  expect(str.endsWith('Kozoriz')).toEqual(true);
});

test('string_endsWith1', () => {
  let str = "Maksym Kozoriz Number First";
  expect(str.endsWith('Number', 21)).toEqual(true);
});

test('string_includes', () => {
  let str= "Maksym Kozoriz Number First";
  expect(str.includes('First')).toEqual(true);
});

test('string_indexOf', () => {
  let str= "Maksym Kozoriz Number First";
  expect(str.indexOf('umber')).toEqual(16);
});

test('string_lastIndexOf', () => {
  let str= "Maksym Kozoriz Number First Number";
  expect(str.lastIndexOf('umber')).toEqual(29);
});

test('string_localeCompare', () => {
  let a = 'A'; // with accents, lowercase
  let b = 'B'; // no accents, uppercase
  expect(b.localeCompare(a)).toEqual(1);
});

test('string_match', () => {
  let str="Maksym Kozoriz";
  let regExp= /[A-Z]/g;
  expect(str.match(regExp)).toEqual(['M','K']);
});

test('string_normalize', () => {
  let str1 = "Maksnm";
  let str2 = "Maksñm";
  expect(str1.normalize('NFD')==str2.normalize('NFD')).toEqual(false);
});

test('string_padEnd', () => {
  let str = "Maksym";
  expect(str.padEnd(8)).toEqual('Maksym  ');
});

test('string_padStart', () => {
  let str = "Maksym Kozoriz";
  expect(str.padStart(str.length+2, '*')).toEqual('**Maksym Kozoriz');
});

test('string_repeat', () => {
  let str = " number one,";
  expect("Maksym"+str.repeat(2)).toEqual("Maksym number one, number one,");
});

test('string_replace', () => {
  let str="Maksym Kozoriz";
  expect(str.replace("Kozoriz", "TOP")).toEqual("Maksym TOP");
});

test('string_search', () => {
  let str="Maksym Kozoriz Hello World";
  expect(str.search('Hello')).toEqual(15);
});

test('string_slice', () => {
  let str="Maksym Kozoriz Hello World";
  expect(str.slice(7,14)).toEqual('Kozoriz');
});

test('string_split', () => {
  let str="Maksym Kozoriz";
  expect(str.split(' ')).toEqual(['Maksym', 'Kozoriz']);
});

test('string_startsWith', () => {
  let str="Maksym Kozoriz";
  expect(str.startsWith("Ko", 7)).toEqual(true);
});

test('string_substring', () => {
  let str="Maksym Kozoriz";
  expect(str.substring(7,9)).toEqual('Ko');
});

test('string_toLocaleLowerCase', () => {
  let str="MaksyM";
  expect(str.toLocaleLowerCase('en-US')).toEqual('maksym');
});

test('string_toLocaleUpperCase', () => {
  let str="MaksyM";
  expect(str.toLocaleUpperCase('en-US')).toEqual('MAKSYM');
});

test('string_toLowerCase', () => {
  let str="MaksyM Kozoriz";
  expect(str.toLowerCase()).toEqual('maksym kozoriz');
});

test('string_toString', () => {
  let str=['Maksym','Kozoriz', 'first'];
  expect(str.toString()).toEqual('Maksym,Kozoriz,first');
});

test('string_toUpperCase', () => {
  let str="MaksyM Kozoriz";
  expect(str.toUpperCase()).toEqual('MAKSYM KOZORIZ');
});

test('string_trim', () => {
  let str=" Maksym Kozoriz   ";
  expect(str.trim()).toEqual('Maksym Kozoriz');
});

test('string_trimEnd', () => {
  let str="Maksym Kozoriz   ";
  expect(str.trimEnd()).toEqual('Maksym Kozoriz');
});


test('string_trimStart', () => {
  let str=" Maksym Kozoriz ";
  expect(str.trimStart()).toEqual('Maksym Kozoriz ');
});

test('string_valueOf', () => {
  let stringObject = new String('Maksym Kozoriz');
  expect(stringObject.valueOf()).toEqual('Maksym Kozoriz');
});

test('string_prototype', () => {
  let str="Maksym Kozoriz";
  expect(str[Symbol.iterator]().next().value).toEqual('M');
});

test('string_raw', () => {
  const str= String.raw`C:\Program Files`;
  expect('From: ' + str).toEqual('From: C:\\Program Files');
});

//P R O P E R T I E S

test('string_length', () => {
  let str = "Maksym Kozoriz";
  expect(str.length).toEqual(14);
});

/*test('', () => {
  expect().toEqual();
});*/
