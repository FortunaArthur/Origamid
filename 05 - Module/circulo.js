
// Circulo.js
import randomNumero from "./numeroRandom.js";

function area(raio) {
  return Math.PI * raio * raio;
}

function circunferencia(raio) {
  return 2 * raio * Math.PI;
}

function aleatorio() {
  return randomNumero();
}

const Circulo = {
  area,
  circunferencia,
  aleatorio
};

export default Circulo;
