import { Injectable } from '@nestjs/common';
import { CemeteryFactory } from './app.interface';
import { BogotaCemeteryFactory } from './models/bogota';
import { CartagenaCemeteryFactory } from './models/cartagena';

function searchForDeceased(factory: CemeteryFactory, city: string) {
  const search = factory.createSearch();
  const result = search.search(city);

  if (result) {
    return `Información del cementerio en ${result.getLocation()}, Tumbas/lápidas: ${result.getGraveList()}`;
  } else {
    return `No se encontro información`;
  }
}

@Injectable()
export class AppService {
  getCemetery(city: string): string {
    if (city === 'Bogota') {
      const bogotaFactory = new BogotaCemeteryFactory();
      return searchForDeceased(bogotaFactory, city);
    }
    if (city === 'Cartagena') {
      const cartagenaFactory = new CartagenaCemeteryFactory();
      return searchForDeceased(cartagenaFactory, city);
    }
  }
}
