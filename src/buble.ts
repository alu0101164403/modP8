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
    console.log('hola');
    let i: number = 0;
    while (i < listaOrdenar.length) {
      listaOrdenar.forEach((numero, indice) => {
        console.log(numero);
        console.log(listaOrdenar[indice+1]);
        if (numero > listaOrdenar[indice+1]) {
          listaOrdenar[indice] = listaOrdenar[indice+1];
          listaOrdenar[indice+1] = numero;
        }
      });
      i++;
    }
    return listaOrdenar;
  }
}
