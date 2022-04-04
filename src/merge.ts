import {Strategy} from './interfaz';

/**
 * Clase que implmeenta el algoritmo de ordenacion por el método
 * merge, este metodo subdivide la lista en trozos mas pequeños,
 * los ordena y luego los vuelve a mezclar
 */
export class Merge implements Strategy {
  execute(listaOrdenar: number[]): number[] {
    this.merge(0, listaOrdenar.length-1, listaOrdenar);

    return listaOrdenar;
  }
  private merge(izda: number, dcha: number, lista: number[]): void {
    if (lista.length <= 1) {
      return;
    } else if (izda < dcha) {
      const mitad: number = lista.length /2;
      this.merge(dcha, mitad, lista);
      this.merge(mitad, izda, lista);
      this.mergeSort(izda, mitad, dcha, lista);
    }
  }
  // eslint-disable-next-line max-len
  private mergeSort(izda: number, mitad: number, dcha: number, lista: number[]): void {
    let aux: number[] = [];
    for (let i = izda; i <= dcha; i++) {
      aux[i] = lista[i];
    }
  }
}
