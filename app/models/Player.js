export class Player {
  constructor(data) {
    this.name = data.name
    this.score = 0
  }

  get ListTemplate() {
    return `<li>${this.name}</li>`
  }
}