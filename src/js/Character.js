export default class Character {
  constructor(name, type) {
    if (name.length <= 2) {
      throw new Error('Длина имени не может быть короче 2 вимволов');
    }
    const arrName = ['Boweman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (arrName.includes(type) === false) {
      throw new Error('Неверный тип игрока');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 20;
    this.defence = 50;
  }
}
