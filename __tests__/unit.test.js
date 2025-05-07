// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//Phone number
test('Pass valid length', () => {
  expect(isPhoneNumber("427-874")).toBe(true);
});
test('Pass with area code', () => {
  expect(isPhoneNumber("(455) 427-8746")).toBe(true);
});
test('Pass invalid format', () => {
  expect(isPhoneNumber("4278746")).toBe(false);
});

test('Pass invalid length', () => {
  expect(isPhoneNumber("(33338746")).toBe(false);
});

//Email
test('Pass custom email', () => {
  expect(isEmail("me@mysite.com")).toBe(true);
});
test('Pass typical email', () => {
  expect(isEmail("johndoe@gmail.com")).toBe(true);
});
test('Missing start', () => {
  expect(isEmail("@site.com")).toBe(false);
});

test('Missing end', () => {
  expect(isEmail("(myname@site")).toBe(false);
});

//Email
test('Pass strong password', () => {
  expect(isStrongPassword("thIsisStrongA5_")).toBe(true);
});
test('Only letters', () => {
  expect(isStrongPassword("aNotherPassrd")).toBe(true);
});
test('starts with symbol', () => {
  expect(isStrongPassword("!jsdf")).toBe(false);
});

test('too short', () => {
  expect(isStrongPassword("abc")).toBe(false);
});

//Date
test('Valid date', () => {
  expect(isDate("01/20/2023")).toBe(true);
});
test('Valid date excluding leading 0s', () => {
  expect(isDate("1/5/2025")).toBe(true);
});
test('Year too short', () => {
  expect(isDate("5/26/23")).toBe(false);
});
test('Bad formatting', () => {
  expect(isDate("5 2 30")).toBe(false);
});

//Hex color
test('Valid hex color', () => {
  expect(isHexColor("#A025B6")).toBe(true);
});
test('3 char hex', () => {
  expect(isHexColor("#FFF")).toBe(true);
});
test('Empty input', () => {
  expect(isHexColor("")).toBe(false);
});
test('Wrong number of chars', () => {
  expect(isHexColor("#FB59")).toBe(false);
});

