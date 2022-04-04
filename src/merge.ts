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
  /**
   * metodo que realiza la separacion de la lista en subvectores mas pequeños
   * @param izda number
   * @param dcha number
   * @param lista number[]
   * @returns void
   */
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
  /**
   * metodo que realiza la ordenacion y mezcla de los subvectores
   * @param izda number
   * @param mitad number
   * @param dcha numer
   * @param lista number[]
   */
  // eslint-disable-next-line max-len
  private mergeSort(izda: number, mitad: number, dcha: number, lista: number[]): number[] {
    const aux: number[] = [];
    let i: number = 0;
    let j: number = 0;
    let k: number = 0;
    for (let i = izda; i <= dcha; i++) {
      aux[i] = lista[i];
    }
    i = izda;
    j = mitad + 1;
    k = izda;
    while (i <= mitad && j <= dcha) {
      if (aux[i] <= aux[j]) {
        lista[k++] = aux[i++];
      } else {
        lista[k++] = aux[j++];
      }
    }
    while (i <= mitad) {
      lista[k++] = aux[i++];
    }
    console.log(lista);
    return lista;
  }
}
