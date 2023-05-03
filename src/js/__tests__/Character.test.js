import Character from '../Character';

test('check Character error name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const ch1 = new Character('b', 'Character');
  }).toThrowError('Длина имени не может быть короче 2 вимволов');
});

test('check Character error type', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const ch1 = new Character('character', 'Character1');
  }).toThrowError('Неверный тип игрока');
});

test('check character is created', () => {
  const newCh = new Character('character', 'Boweman');
  expect(newCh.name).toBe('character');
  expect(newCh.type).toBe('Boweman');
});
