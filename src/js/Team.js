export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(gamer) {
    if (this.members.has(gamer)) {
      throw new Error('Такой игрок уже есть в команде');
    } else {
      this.members.add(gamer);
      console.log(this.members);
    }
  }

  addAll(...gamers) {
    gamers.forEach((item) => this.members.add(item));
  }

  toArray() {
    return [...this.members];
  }
}
