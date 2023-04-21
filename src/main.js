export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.add(character);
  }

  addAll(characters) {
    characters.forEach((ch) => this.members.add(ch));
  }

  toArray() {
    return Array.from(this.members);
  }
}
