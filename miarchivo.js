//Desafio obligarorio N° 2 incorporar eventos.
//Se incorpora eventos varios para un store de bebidas.
//En el mismo, se pretende mostrar como el usuario puede elegir una bebida determinada y como un contador acumula.
//por ultimo al hacer click en la descripcion de un producto se muestran diferentes items que especifica al producto elegido
//Alumno: Nunnini Luciano

//defino la variable contador

let contador = 0;

let input_cantidad = document.getElementById("cantidad");

input_cantidad.value = contador;

let bebida1 = new bebida(1, "GASEOSAS", "/image/gaseosas.jpg");
let bebida2 = new bebida(2, "JUGOS", "/image/jugo.png");
let bebida3 = new bebida(3, "CERVEZAS", "/image/cervezaind.png");

//DEFINO ARREGLO

let arreglo_bebida = new Array();

arreglo_bebida.push(bebida1);
arreglo_bebida.push(bebida2);
arreglo_bebida.push(bebida3);

let bebidas_can = document.getElementById("bebidas_can");

for (let i = 0; i < arreglo_bebida.length; i++) {
  let objeto_bebida = arreglo_bebida[i];
  crear_caja_bebida(objeto_bebida);
}

//DEFINO LA FUNCION PARA CREAR LA CAJA DE BEBIDAS
function crear_caja_bebida(bebidas) {
  let cant = document.createElement("div");

  let tipo = document.createElement("h2");
  tipo.textContent = bebidas.getTitle();

  let img = document.createElement("img");
  img.setAttribute("src", bebidas.image);

  cant.appendChild(tipo);
  cant.appendChild(img);

  //empiezo agregar eventos addEventListener

  bebidas_can.appendChild(cant);
  cant.addEventListener("mouseover", () => {
    cant.style.background = "blue";
  });

  cant.addEventListener("mouseout", () => {
    cant.style.backgroundColor = "white";
  });

  cant.addEventListener("click", () => {
    bebidas_can.removeChild(cant);
    alert("Agregaste una bebida");
    contador++;
    input_cantidad.value = contador;

    if (contador == arreglo_bebida.length) {
      alert("Agregaste todas las bebidas");
    }
  });
}

//event.target para al descripciones de gaseosa, jugo y cerveza
let subitemList = document.getElementById("subitemList");

subitemList.addEventListener("click", (event) => {
  //Objeto de evento
  if (event.target.className === "item2") {
    if (event.target.children[0].style.display === "block") {
      event.target.children[0].style.display = "none";
    } else {
      event.target.children[0].style.display = "block";
    }
  }
});
