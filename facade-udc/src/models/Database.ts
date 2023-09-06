export class Database {
  private data: Map<string, string>;

  constructor() {
    this.data = new Map();
  }

  searchInDatabase(name: string): string | undefined {
    return this.data.get(name);
  }

  addToDatabase(name: string, cemeteryInfo: string) {
    this.data.set(name, cemeteryInfo);
  }
}
