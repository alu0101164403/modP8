import {Strategy} from './interfaz';

/**
 * Clase que implmeenta el algoritmo de ordenacion por el método
 * de la burbuja, este metodo compara dos elementos consecutivos de
 * una lista y los ordena si es necesario
 */
export class Buble implements Strategy {
  /**
   * Metodo que realiza el algoritmo de ordenacion
   * @param listaOrdenar number[]
   * @returns listaOrdenar: number[], devuelve el mismo vector ordenado
   */
  execute(listaOrdenar: number[]): number[] {
    let i: number = 0;
    while (i < listaOrdenar.length) {
      listaOrdenar.forEach((numero, indice) => {
        // eslint-disable-next-line max-len
        if ((indice+1) <= listaOrdenar.length && numero > listaOrdenar[indice+1]) {
          listaOrdenar[indice] = listaOrdenar[indice+1];
          listaOrdenar[indice+1] = numero;
        }
      });
      i++;
    }
    console.log(listaOrdenar);
    return listaOrdenar;
  }
}
