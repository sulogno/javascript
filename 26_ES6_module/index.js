import { PI, getCircumference, getArea, getVolume } from './math_util.js';

console.log(PI);
let circumfarence = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);
console.log(`${circumfarence.toFixed(2)}`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`);