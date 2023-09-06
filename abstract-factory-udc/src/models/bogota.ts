import {
  CemeteryFactory,
  CemeteryInfo,
  CemeterySearch,
} from '../app.interface';

// Implementación concreta de CemeteryInfo para Bogotá
class BogotaCemeteryInfo implements CemeteryInfo {
  getLocation() {
    return 'Bogotá, Colombia';
  }

  getGraveList() {
    return ['101A', '120A'];
  }
}

class BogotaCemeterySearch implements CemeterySearch {
  search(name: string) {
    // Lógica para buscar en el cementerio de Bogotá
    if (name === 'Bogota') {
      return new BogotaCemeteryInfo();
    }
    return null;
  }
}

export class BogotaCemeteryFactory implements CemeteryFactory {
  createInfo() {
    return new BogotaCemeteryInfo();
  }

  createSearch() {
    return new BogotaCemeterySearch();
  }
}
