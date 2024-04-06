import { Validator } from '../validator.js';

describe('Validator', () => {
  const validator = new Validator();

  test('should validate valid usernames', () => {
    const validUsernames = ['Name', 'A-Name_12b', 'Name_1-2-3a'];
    validUsernames.forEach(username => {
      expect(validator.validateUsername(username)).toBeTruthy();
    });
  });

  test('should invalidate invalid usernames', () => {
    const invalidUsernames = ['1234', '-name-', 'name--1234', 'name1234', 'A-Name_123'];
    invalidUsernames.forEach(username => {
      expect(validator.validateUsername(username)).toBeFalsy();
    });
  });
});
