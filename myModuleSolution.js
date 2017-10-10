import { getTriangleArea, square } from './myMathModule';

const solution = n => getTriangleArea(n, square(n) / 2);

export default solution;