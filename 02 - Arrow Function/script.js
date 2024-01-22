// função
// function upperName(name) {
//     return name.toUpperCase();
// };

// função dentro de variavel
// const upperName = name => name.toUpperCase();

class Menu {
    constructor(menu) {
      this.menuElement = document.querySelector(menu);
      this.activeClass = "active";
    }
    addActiveEvent() {
      // sem o arrow function ele não iria funcionar
      this.menuElement.addEventListener("click", event =>
        event.target.classList.add(this.activeClass)
      );
    }
  }
  
  const menu = new Menu(".principal");
  menu.addActiveEvent();
  