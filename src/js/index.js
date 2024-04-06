import { Validator } from './validator.js';

const validator = new Validator();

// Примеры имен пользователей для валидации
const usernames = [
  'ValidName_123',
  'invalid-name-',
  '123Invalid',
  'Valid-Name',
  'Invalid____Name',
  'ValidName1234',
  'ValidName'
];

// Функция для проверки имен пользователей
function checkUsernames(usernames) {
  usernames.forEach(username => {
    console.log(`Имя пользователя "${username}" валидно: ${validator.validateUsername(username)}`);
  });
}

// Проверка имен пользователей
checkUsernames(usernames);
