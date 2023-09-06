import { Injectable } from '@nestjs/common';
import { CemeteryFacade } from './facade/CemeteryFacade';

@Injectable()
export class AppService {
  getDeceased(): string {
    const cemeteryFacade = new CemeteryFacade();

    // Crear una persona fallecida y agregarla a la base de datos
    cemeteryFacade.createDeceasedPerson(
      'Juan Pérez',
      'Cementerio X, Tumba 123',
    );
    cemeteryFacade.createDeceasedPerson(
      'Fulano Martinez',
      'Cementerio Y, Tumba 432',
    );

    // Buscar a una persona fallecida por nombre
    const searchResult = cemeteryFacade.searchForDeceased('Fulano Martinez');
    if (searchResult) {
      return `${searchResult.name} se encuentra en ${searchResult.cemeteryInfo}`;
    } else {
      return 'No se encontró información para esa persona.';
    }
  }
}
