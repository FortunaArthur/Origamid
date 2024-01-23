import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";
import randomNumero from "./numeroRandom.js"; //pode colocar qualquer nome pq la ta em default
import Circulo from "./circulo.js";

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(8));

console.log(randomNumero());

console.log(Circulo.area(5));
console.log(Circulo.circunferencia(8));
Circulo.aleatorio();