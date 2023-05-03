export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    // this.errors = new Map([
    //   [1, 'Длина имени не может быть короче 2 вимволов'],
    //   [2, 'Неверный тип игрока'],
    //   [3, 'Такой игрок уже есть в команде'],
    // ]);
  }

  add(key, value) {
    this.errors.set(key, value);
  }

  translate(code) {
    let text = '';
    if (this.errors.has(code)) {
      text = this.errors.get(code);
    } else {
      text = 'Unknown error';
    }
    return text;
  }
}
