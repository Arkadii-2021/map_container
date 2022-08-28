export default class ErrorRepository {
  constructor() {
    this.errData = new Map([
      [404, 'Page not found'],
      [500, 'Internal Server Error'],
      [522, 'Connection Timed Out'],

    ]);
  }

  translate(code) {
    if (this.errData.has(code)) {
      return this.errData.get(code);
    }
    return 'Unknown error';
  }
}
