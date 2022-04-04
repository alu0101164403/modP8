/**
 * interfaz que las clases con algoritmos de ordenacion
 * deben implementar
 */
export interface Strategy {
  execute(listaOrdenar: number[]): number[];
}
