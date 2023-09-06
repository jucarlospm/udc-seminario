import {
  CemeteryFactory,
  CemeteryInfo,
  CemeterySearch,
} from '../app.interface';

function getRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet.charAt(randomIndex);
}

function generateRandomLetterArray(length: number): string[] {
  const randomArray: string[] = [];
  for (let i = 0; i < length; i++) {
    let randomElement = '';
    for (let j = 0; j < 4; j++) {
      randomElement += getRandomLetter();
    }
    randomArray.push(randomElement);
  }
  return randomArray;
}

// Implementación concreta de CemeteryInfo para Cartagena
class CartagenaCemeteryInfo implements CemeteryInfo {
  getLocation() {
    return 'Cartagena, Colombia';
  }

  getGraveList() {
    return generateRandomLetterArray(4);
    // return ['ABC1', 'AXZ2'];
  }
}

class CartagenaCemeterySearch implements CemeterySearch {
  search(name: string) {
    // Lógica para buscar en el cementerio de Cartagena
    if (name === 'Cartagena') {
      return new CartagenaCemeteryInfo();
    }
    return null;
  }
}

export class CartagenaCemeteryFactory implements CemeteryFactory {
  createInfo() {
    return new CartagenaCemeteryInfo();
  }

  createSearch() {
    return new CartagenaCemeterySearch();
  }
}
