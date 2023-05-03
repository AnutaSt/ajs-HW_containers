import Character from './Character';
import Team from './Team';
import ErrorRepository from './Errors';

const gamer1 = new Character('Gamer-1', 'Boweman');
const gamer2 = new Character('Gamer-2', 'Magician');
const gamer3 = new Character('Gamer-3', 'Swordsman');
const teamOne = new Team();
teamOne.add(gamer1);
teamOne.add(gamer2);
// teamOne.add(gamer2);

teamOne.addAll(gamer1, gamer2, gamer3, gamer3, new Character('Gamer-4', 'Zombie'), new Character('Gamer-4', 'Zombie'));

// eslint-disable-next-line no-console
console.log(teamOne.members);

const arr = teamOne.toArray();
// eslint-disable-next-line no-console
console.log(arr);

const newErr = new ErrorRepository();
newErr.add(1, 'Длина имени не может быть короче 2 вимволов');
newErr.add(2, 'Неверный тип игрока');
newErr.add(3, 'Такой игрок уже есть в команде');
//   [1, 'Длина имени не может быть короче 2 вимволов'],
//   [2, 'Неверный тип игрока'],
//   [3, 'Такой игрок уже есть в команде'],
// eslint-disable-next-line no-console
console.log(newErr);
// eslint-disable-next-line no-console
console.log(newErr.translate(2));
console.log(newErr.translate(4));
