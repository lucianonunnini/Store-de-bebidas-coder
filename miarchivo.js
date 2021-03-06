//Desafio obligarorio N° 2 incorporar eventos.
//Se incorpora eventos varios para un store de bebidas.
//En el mismo, se pretende mostrar como el usuario puede elegir una bebida determinada y como un contador acumula.
//por ultimo al hacer click en la descripcion de un producto se muestran diferentes items que especifica al producto elegido

//Se agregó la libreria sweet alert para modificar los alertas que se encuentran en el proyecto para que indique al usuario la bebida elegida
//se agregó fetch y un archivo .json de los productos
//Alumno: Nunnini Luciano

//defino la variable contador

let contador = 0;

let input_cantidad = document.getElementById("cantidad");

input_cantidad.value = contador;

let bebida1 = new bebida(1, "GASEOSAS", "/image/gaseosas.jpg");
let bebida2 = new bebida(2, "JUGOS", "/image/jugo.png");
let bebida3 = new bebida(3, "CERVEZAS", "/image/cervezaind.png");


//creo un fecth para cargar API que cree con el JSON (data.json)


  fetch('/data.json')
    .then((res) => res.json())
    .then((data) => {console.log (data)
    })



//se prueba realizar la Desestructuracion de arrays

/* let ['bebida1','bebida2','bebida3'] = arreglo_bebida */

//DEFINO ARREGLO
let arreglo_bebida = new Array();

arreglo_bebida.push(bebida1);
arreglo_bebida.push(bebida2);
arreglo_bebida.push(bebida3);


// spread de array
/* console.log(...arreglo_bebida) */

let bebidas_can = document.getElementById("bebidas_can");


//se indentifica como i++ como operador ++ (sugar sintax)
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
      
   Swal.fire({
     icon: "succes",
     title: "AGREGASTE LA BEBIDA",
     text: "Muchas gracias!",
     
   });
    
    //alert("Agregaste una bebida");
      

    //se indentifica como contador++ como operador ++ (sugar sintax)
    contador++;
    input_cantidad.value = contador;


      //optimizo el codigo de if contador con operador ternario
      /*contador == arreglo_bebida.length ? alert ('Agregaste todas las bebidas'): alert ('Quedan bebidas disponibles')
      */
    if (contador == arreglo_bebida.length) {
      
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Agregaste todas las bebidas",
        showConfirmButton: false,
        timer: 1800,
      });
      
      
        
    }
  });
}

//event.target para la descripciones de gaseosa, jugo y cerveza
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
})


//creo una funcion para guardar algo en el LOCALSTORAGE

guardar_localstorage()
function guardar_localstorage(){
    let consumicion = {
        nombre: 'cerveza',
        tipo: 'industrial',
        precio: '100',


    }


    
    //grabar cerveza artesanal en el localstorage
let nombre = 'cerveza artesanal'
    localStorage.setItem('nombre', JSON.stringify(nombre
    ))

    //guardo objeto consumicion en el localstorage 
    localStorage.setItem("consumicion", JSON.stringify(consumicion))

}


//obtencion de la informacion del localstorage

obtener_localstorage()
function obtener_localstorage() {
  //armo un if condicional para saber si existe el nombre en el localstorage
  if (localStorage.getItem("nombre")) {
    // si existe la bebida en el localstorage

      let nombre = localStorage.getItem("nombre");
     

    //recupero el objeto consumicion para que me devuelva el objeto
    let consumicion = JSON.parse(localStorage.getItem("consumicion"));
    console.log(nombre);
      console.log(consumicion);
      
  } else {
    console.log("NO existe la bebida en el localstorage");
  }


}

// uso del operador logico or en el caso para recuperar el objeto consumicion
let consumicion = JSON.parse (localStorage.getItem ('consumicion')) || [console.log ('NO existe la bebida en el localstorage')]


 

//Eliminar toda la informacion en el locasltorage

  localStorage.clear()

  //Eliminar un item del localstorage

    localStorage.removeItem("nombre")