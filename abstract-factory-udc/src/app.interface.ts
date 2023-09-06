// Definición de las interfaces para los productos concretos que se crearán
export interface CemeteryInfo {
  getLocation(): string;
  getGraveList(): string[];
}

export interface CemeterySearch {
  search(name: string): CemeteryInfo | null;
}

// Fabrica abstracta para crear objetos relacionados
export interface CemeteryFactory {
  createInfo(): CemeteryInfo;
  createSearch(): CemeterySearch;
}
