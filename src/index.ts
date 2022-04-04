import {Buble} from '../src/buble';
import {Solver} from '../src/solver';
import {Merge} from '../src/merge';


const mySolver = new Solver([5, 23, 9, 1, 0, 7, 2], new Buble());
console.log(mySolver.logic());

mySolver.setStrategy(new Merge());
mySolver.logic();

