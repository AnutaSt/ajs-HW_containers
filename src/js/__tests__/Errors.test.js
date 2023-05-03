import ErrorRepository from '../Errors';

test.each([
  ['with code 2', 2, 'Unknown error'],
  ['with code 8', 8, 'Неверный тип игрока'],
])('correct translate %s', (_, code, expected) => {
  const obj = new ErrorRepository();
  const result = obj.translate(code);
  expect(result).toBe(expected);
});
