import {Buble} from './buble';
import {Solver} from './solver';
import {Merge} from './merge';


const mySolver = new Solver([5, 23, 9, 1, 0, 7, 2], new Buble());
console.log('buble', mySolver.logic());

mySolver.setStrategy(new Merge());
console.log('merge', mySolver.logic());

