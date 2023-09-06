import { Database } from '../models/Database';
import { DeceasedPerson } from '../models/DeceasedPerson';

// Fachada que simplifica la interacción con la base de datos y la creación de personas fallecidasex
export class CemeteryFacade {
  private database: Database;

  constructor() {
    this.database = new Database();
  }

  createDeceasedPerson(name: string, cemeteryInfo: string): DeceasedPerson {
    this.database.addToDatabase(name, cemeteryInfo);
    return new DeceasedPerson(name, cemeteryInfo);
  }

  searchForDeceased(name: string): DeceasedPerson | undefined {
    const cemeteryInfo = this.database.searchInDatabase(name);
    if (cemeteryInfo) {
      return new DeceasedPerson(name, cemeteryInfo);
    }
    return undefined;
  }
}
