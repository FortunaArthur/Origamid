// Rest
function showList(empresa, ...clientes) {
  console.log(empresa);
  console.log(clientes);
}

showList("Sysmap", "André", "Pedro", "João", 10);

// Spread

//Arrays
const numeros = [1, 4, 9, 2, 3, 6, 20];
console.log(Math.max(...numeros)); // retorna 20

//Transformar ArrayLike and Array
// const items = document.querySelectorAll("li");
// console.log(items);

//Objetos
const carro = {
  cor: "azul",
  portas: 4,
  ano: 2020
};

// const cloneCarro = { ...carro };
// const carroEsportivo = { turbo: true, ...carro };

// Shallow Clone
class Transporte {
  constructor() {
    this.terrestre = true;
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const meuCarro = new Carro("vermelho", 4);

// Shallow Clone
const cloneCarro = { ...meuCarro };
console.log(carro);