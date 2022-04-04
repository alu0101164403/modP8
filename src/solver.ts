import {Strategy} from './interfaz';

/**
 * Clase cocntexto con la que se permite elegir el algortimo
 * deseado para la ordenacion
 */
export class Solver {
  /**
   * constrctor que recibe la lista de elementos a ordenar y
   * la clase con el algortimo deseado
   * @param listaOrdenar number[]
   * @param strategy strategy, es una interfaz
   */
  constructor(private listaOrdenar: number[], private strategy: Strategy) {
  }
  /**
   * este metodo permite cambiar el algortmo de ordenacion
   * @param strategy Strategy
   */
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }
  /**
   * metodo que llama al metodo con el algoritmo de la clase
   * indicada
   */
  public logic() {
    this.strategy.execute(this.listaOrdenar);
  }
}
