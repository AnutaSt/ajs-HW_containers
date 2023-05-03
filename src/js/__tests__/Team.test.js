import Team from '../Team';
import Character from '../Character';

const gamer1 = new Character('Gamer-1', 'Boweman');
const gamer2 = new Character('Gamer-2', 'Magician');

test('adding the same player error', () => {
  expect(() => {
    const teamOne = new Team();
    teamOne.add(gamer1);
    teamOne.add(gamer1);
  }).toThrowError('Такой игрок уже есть в команде');
});

test('check adding player', () => {
  const teamOne = new Team();
  teamOne.add(gamer1);
  expect(teamOne.members.size).toBe(1);
});

test('check adding all player', () => {
  const teamOne = new Team();
  teamOne.addAll(gamer1, gamer1, gamer2, gamer2);
  expect(teamOne.members.size).toBe(2);
});

test('check team toArray', () => {
  const teamOne = new Team();
  teamOne.add(gamer1);
  const result = teamOne.toArray();
  expect(result).toEqual(
    [
      {
        name: 'Gamer-1',
        type: 'Boweman',
        level: 1,
        health: 100,
        attack: 20,
        defence: 50,
      },
    ],
  );
});
