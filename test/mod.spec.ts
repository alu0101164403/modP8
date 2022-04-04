import 'mocha';
import {expect} from 'chai';
import {Buble} from '../src/buble';
import {Solver} from '../src/solver';
import {Merge} from '../src/merge';


describe('Test clases ordenacion', () => {
  const ordenar: Solver = new Solver([5, 23, 9, 1, 0, 7, 2], new Buble());
  const ordenar2: Solver = new Solver([5, 8, -9, 1, 2], new Buble());
  describe('Test clase burbuja', () => {
    it('Test comprobar ordenacion', () => {
      expect(ordenar.logic()).to.deep.eq([0, 1, 2, 5, 7, 9, 23]);
      expect(ordenar2.logic()).to.deep.eq([-9, 1, 2, 5, 8]);
    });
    it('Test comprobar ordenacion', () => {
      expect(ordenar.logic()).to.deep.eq([0, 1, 2, 5, 7, 9, 23]);
    });
  });
  describe('Test clase merge', () => {
    it('Test comprobar ordenacion', () => {
      ordenar.setStrategy(new Merge());
      ordenar2.setStrategy(new Merge());
      expect(ordenar.logic()).to.deep.eq([0, 1, 2, 5, 7, 9, 23]);
      expect(ordenar2.logic()).to.deep.eq([-9, 1, 2, 5, 8]);
    });
  });
});
