function handleMouseMove({ClientX, ClientY}){
  console.log(ClientX, ClientY);
};

// document.documentElement.addEventListener("mousemove", handleMouseMove);

// array
const fruta = ["maça", "uva", "pera"]
const fruta2 = fruta[1]
console.log(fruta2)

// React hooks
const useState = [
  "blue",
  function(color) {
    useState[0] = color;
  }
];

const [color, setColor] = useState;

setColor("Vermelho");